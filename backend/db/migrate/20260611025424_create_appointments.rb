class CreateAppointments < ActiveRecord::Migration[8.1]
  def change
    create_table :appointments do |t|
      t.string :full_name
      t.string :email
      t.string :phone_number
      t.date :date
      t.time :appointment_time
      t.integer :doctor_id
      t.text :notes
      t.timestamps
    end
  end
end
