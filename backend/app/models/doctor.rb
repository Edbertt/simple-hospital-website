class Doctor < ApplicationRecord
    validates :name, presence: true
    validates :speciality_id, presence: true
    validates :department_id, presence: true
    validates :experience, numericality: { greater_than_or_equal_to: 0}

    belongs_to :department

    SPECIALITY_TYPES = {
        1 => 'Cardiologist',
        2 => 'Pediatrician',
        3 => 'General Surgeon',
        4 => 'Neurology',
        5 => 'Dermatology',
        6 => 'Orthopedic Surgeon'
    }

    def speciality_caption
        SPECIALITY_TYPES[self.speciality_id.to_i]
    end

    def department_name
        Department::DEPARTMENT_TYPES[self.department_id.to_i]
    end
end
