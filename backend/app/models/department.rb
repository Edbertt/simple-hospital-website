class Department < ApplicationRecord
    has_many :doctors

    validates :name, presence: true
    validates :description, presence: true

    DEPARTMENT_TYPES = {
        1 => 'Cardiologist',
        2 => 'Pediatrician',
        3 => 'General Surgeon',
        4 => 'Neurology',
        5 => 'Dermatology',
        6 => 'Orthopedic Surgeon'
    }

    def department_caption
        DEPARTMENT_TYPES[self.department_id.to_i]
    end

    def head_doctor_name
        if self.head_doctor_id.present?
            head_doctor = Doctor.find(self.head_doctor_id) 
            return head_doctor.name
        else
            return ""
        end
    end
    
    def total_doctor
        doctor_count = self.doctors.count
        return doctor_count
    end
end
