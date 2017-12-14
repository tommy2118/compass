class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :category
      t.string :title
      t.text :description
      t.boolean :is_core, default: false
      t.boolean :requires_review, default: false
      t.datetime :reviewed_at, default: Time.now
      t.text :references

      t.timestamps
    end
  end
end
