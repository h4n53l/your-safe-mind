import { SMTPClient } from 'emailjs';

export async function POST(request: any) {
  const { to, subject, appointmentDetails, isPatient } = await request.json();

  const patientEmailHTMLTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2c3e50; margin-bottom: 10px;">Appointment Confirmation</h1>
        <p style="color: #7f8c8d; font-size: 16px;">Thank you for booking your session with us!</p>
      </div>

      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">Appointment Details</h2>
        
        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Appointment ID:</strong>
          <span style="color: #2c3e50;">${appointmentDetails._id}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Date & Time:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.date} ${appointmentDetails.time}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Therapist:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.doctor.name}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Payment Status:</strong>
          <span style="color: ${appointmentDetails.status === 'approved' ? '#27ae60' : '#e74c3c'}">${appointmentDetails.status.toUpperCase()}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Amount Paid:</strong>
          <span style="color: #2c3e50;">£${appointmentDetails.fee}</span>
        </div>
      </div>

      <div style="background-color: #ebf5f7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #2c3e50; margin-bottom: 10px;">Preparing for Your Session</h3>
        <ul style="color: #34495e; padding-left: 20px;">
          <li>Please allow 5-10 minutes before your appointment time</li>
          <li>Ensure you're in a quiet, private space for your session</li>
          <li>Have a notebook and water handy if needed</li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <p style="color: #7f8c8d; font-style: italic;">
          "Every session is a step toward your well-being. We look forward to supporting you on your journey."
        </p>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #95a5a6; font-size: 14px;">
            If you need to reschedule or cancel your appointment, please contact us via info@yoursafemind.com at least 24 hours in advance.
          </p>
        </div>
      </div>
    </div>
  `;

  const therapistHTMLTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2c3e50; margin-bottom: 10px;">New Patient Appointment</h1>
        <p style="color: #7f8c8d; font-size: 16px;">You have a new appointment scheduled</p>
      </div>

      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">Appointment Details</h2>
        
        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Appointment ID:</strong>
          <span style="color: #2c3e50;">${appointmentDetails._id}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Date & Time:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.date} ${appointmentDetails.time}</span>
        </div>
      </div>

      <div style="background-color: #ebf5f7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">Patient Information</h2>
        
        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Name:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.patient.name}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Age:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.patient.age}</span> years</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Gender:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.patient.gender}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Email:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.patient.email}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Condition/Reason:</strong>
          <span style="color: #2c3e50;">${appointmentDetails.patient.problem}</span>
        </div>
      </div>

      <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px;">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">Payment Information</h2>
        
        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Payment Status:</strong>
          <span style="color: ${appointmentDetails.status === 'approved' ? '#27ae60' : '#e74c3c'}">${appointmentDetails.status}</span>
        </div>

        <div style="margin-bottom: 10px;">
          <strong style="color: #34495e;">Session Fee:</strong>
          <span style="color: #2c3e50;">$${appointmentDetails.fee}</span>
        </div>
      </div>

      <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
        <h3 style="color: #2c3e50; margin-bottom: 10px;">Notes</h3>
        <ul style="color: #34495e; padding-left: 20px;">
          <li>Please review patient information before the session</li>
          <li>Ensure your session room is prepared 5 minutes before the appointment</li>
          <li>Contact the patient directly if you need any additional information</li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #95a5a6; font-size: 14px;">
            If you need to reschedule or cancel this appointment, please contact the administration team as soon as possible.
          </p>
        </div>
      </div>
    </div>
  `;


  const emailClient = new SMTPClient({
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  try {
      console.log("Attempting to send email")
    const message = await emailClient.sendAsync({
            text: isPatient ? `Appointment Confirmation - ID: ${appointmentDetails}
        Date & Time: ${appointmentDetails.date} ${appointmentDetails.time}
        Therapist: ${appointmentDetails.doctor.name}
        Payment Status: ${appointmentDetails.status.toUpperCase()}
        Amount Paid: £${appointmentDetails.fee}`
        :
        `New Patient Appointment
        Patient: ${appointmentDetails.patient.name}
        Date & Time: ${appointmentDetails.date} ${appointmentDetails.time}
        Condition: ${appointmentDetails.patient.problem}
        Age: ${appointmentDetails.patient.age}
        Gender: ${appointmentDetails.patient.gender}
        Email: ${appointmentDetails.patient.email}
        Payment Status: ${appointmentDetails.status}
        Fee: $${appointmentDetails.fee}`,
            from: process.env.SMTP_FROM!,
            to: to,
            subject: subject,
            attachment: [
              { data: isPatient ? patientEmailHTMLTemplate : therapistHTMLTemplate, alternative: true }
            ],
    });

    return Response.json({ success: true, message });
  } catch (error) {
    return Response.json({ success: false, error: error });
  }
}

