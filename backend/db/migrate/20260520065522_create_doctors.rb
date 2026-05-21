class CreateDoctors < ActiveRecord::Migration[8.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.integer :speciality_id
      t.integer :department_id
      t.integer :experience
      t.timestamps
    end
  end
end
