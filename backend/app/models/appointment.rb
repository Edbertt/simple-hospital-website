class Appointment < ApplicationRecord
    belongs_to :doctor

    validates :full_name, presence: true
    validates :phone_number, presence: true
    validates :date, presence: true
    validates :appointment_time, presence: true
    validates :doctor_id, presence: true

    def appointment_time_format
        self.appointment_time.strftime("%H:%m")
    end
end
