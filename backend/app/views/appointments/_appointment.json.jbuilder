json.extract! appointment, :id, :full_name, :email, :phone_number, :date, :appointment_time_format, :doctor, :notes, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)
json.partial! 'doctors/doctor', doctor: appointment.doctor
