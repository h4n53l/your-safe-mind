import { IPatient } from "@/interfaces";
import { Form, Input, Select } from "antd";
import React from "react";

interface PatientDetailsProps {
  patientDetails: Partial<IPatient>;
  setPatientDetails: (patientDetails: Partial<IPatient>) => void;
}

function PatientDetails({
  patientDetails,
  setPatientDetails,
}: PatientDetailsProps) {
  return (
    <div className="mt-7">
      <h1 className="text-sm font-bold text-primary">
        Please provide the following details to book an appointment
      </h1>

      <Form layout="vertical">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <Form.Item
            label="Name"
            className="col-span-4 md:col-span-2 lg:col-span-1"
          >
            <Input
              value={patientDetails.name}
              onChange={(e) =>
                setPatientDetails({ ...patientDetails, name: e.target.value })
              }
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-5 col-span-4 md:col-span-2 lg:col-span-1 ">
            <Form.Item label="Age">
              <Input
                type="number"
                value={patientDetails.age}
                onChange={(e) =>
                  setPatientDetails({ ...patientDetails, age: +e.target.value })
                }
              />
            </Form.Item>

            <Form.Item
              label="Gender"
              className="col-span-2 md:col-span-1 lg:col-span-1"
            >
              <Select
                value={patientDetails.gender}
                onChange={(value) =>
                  setPatientDetails({ ...patientDetails, gender: value })
                }
                options={[
                  {
                    label: "Male",
                    value: "male",
                  },
                  {
                    label: "Female",
                    value: "female",
                  },
                  {
                    label: "Other",
                    value: "other",
                  },
                ]}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Email"
            className="col-span-4 md:col-span-2 lg:col-span-1"
          >
            <Input
              value={patientDetails.email}
              onChange={(e) =>
                setPatientDetails({ ...patientDetails, email: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Phone"
            className="col-span-4 md:col-span-2 lg:col-span-1"
          >
            <Input
              value={patientDetails.phone}
              onChange={(e) =>
                setPatientDetails({ ...patientDetails, phone: e.target.value })
              }
            />
          </Form.Item>

          <div className="col-span-4">
            <Form.Item label="Problem">
              <Input.TextArea
                value={patientDetails.problem}
                onChange={(e) =>
                  setPatientDetails({
                    ...patientDetails,
                    problem: e.target.value,
                  })
                }
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default PatientDetails;