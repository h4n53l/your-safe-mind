"use client";
import { specializations, workDays, workHours } from "@/constants";
import { uploadFileToFirebaseAndReturnURL } from "@/helpers/firebase-uploads";
import { IDoctor } from "@/interfaces";
import { addDoctor, updateDoctor } from "@/server-actions/doctors";
import { Button, Form, Input, message, Select, Upload } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface DoctorFormProps {
  type?: "add" | "edit";
  initialValues?: Partial<IDoctor>;
}

function DoctorForm({ type = "add", initialValues = {} }: DoctorFormProps) {
  const [profilePicture, setProfilePicture] = React.useState<any>(
    initialValues.profilePicture || null
  );
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      if (profilePicture) {
        values.profilePicture = await uploadFileToFirebaseAndReturnURL(
          profilePicture
        );
      } else {
        values.profilePicture = profilePicture;
      }
      let response: any = null;
      if (type == "add") {
        response = await addDoctor(values);
      } else {
        response = await updateDoctor({
          id: initialValues?._id!,
          data: values,
        });
      }

      if (response.success) {
        message.success(response.message);
        router.push("/admin/doctors");
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  let selectedFilesList: any[] = [];

  if (profilePicture && typeof profilePicture === "string") {
    selectedFilesList = [
      { url: profilePicture, thumbUrl: profilePicture, uid: profilePicture },
    ];
  }

  if (profilePicture && typeof profilePicture === "object") {
    selectedFilesList = [
      {
        uid: "-1",
        url: URL.createObjectURL(profilePicture),
        thumbUrl: URL.createObjectURL(profilePicture),
      },
    ];
  }

  if (!profilePicture) {
    selectedFilesList = [];
  }

  return (
    <div className="mt-5">
      <Form
        layout="vertical"
        className="grid grid-cols-4 gap-5"
        onFinish={onSubmit}
        initialValues={initialValues}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input the name!" }]}
          className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input the email!" }]}
          className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please input the phone!" }]}
          className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="specializations"
          label="Specializations"
          rules={[
            { required: true, message: "Please input the specialization!" },
          ]}
          className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Select options={specializations} mode="multiple" />
        </Form.Item>

        <Form.Item
          name="workDays"
          label="Work Days"
          rules={[{ required: true, message: "Please input the work days!" }]}
           className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Select options={workDays} mode="multiple" />
        </Form.Item>

        <Form.Item
          name="startTime"
          label="Start Time"
          rules={[{ required: true, message: "Please input the start time!" }]}
           className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Select options={workHours} />
        </Form.Item>

        <Form.Item
          name="endTime"
          label="End Time"
          rules={[{ required: true, message: "Please input the end time!" }]}
           className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Select options={workHours} />
        </Form.Item>

        <Form.Item
          name="fee"
          label="Fee"
          rules={[{ required: true, message: "Please input the fee!" }]}
           className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="bio"
          label="Bio"
          rules={[{ required: true, message: "Please input the bio!" }]}
          className="col-span-4"
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Doctor Profile Picture" className="flex gap-5">
          <Upload
            listType="picture-card"
            beforeUpload={(file) => {
              setProfilePicture(file);
            }}
            fileList={selectedFilesList}
          >
            <div className="span text-xs">
              {profilePicture ? "Change" : "Upload"} Profile Picture
            </div>
          </Upload>
        </Form.Item>

        <div className="col-span-4 flex justify-end gap-5">
          <Button
            disabled={loading}
            onClick={() => router.push("/admin/doctors")}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DoctorForm;