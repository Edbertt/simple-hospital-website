class CreateDepartments < ActiveRecord::Migration[8.1]
  def change
    create_table :departments do |t|
      t.string :name
      t.text :description
      t.integer :head_doctor_id
      t.timestamps
    end
  end
end
