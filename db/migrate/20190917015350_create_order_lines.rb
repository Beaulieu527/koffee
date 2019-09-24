class CreateOrderLines < ActiveRecord::Migration[5.2]
  def change
    create_table :order_lines do |t|
      t.integer :quantity, default: 0
      t.integer :order_id
      t.integer :product_id
      
      t.timestamps
    end
  end
end
