class Order < ApplicationRecord
    # before_validation :set_total!
    
    belongs_to :user
    has_many :order_lines
    has_many :products, through: :order_lines


    def set_amount!
      self.amount = 0
      order_lines.each do |order_line|
        self.amount += order_line.product.price * order_line.quantity
      end
    end
    
    def build_order_liness_with_product_ids_and_quantities(product_ids_and_quantities)
      product_ids_and_quantities.each do |product_id_and_quantity|
        id, quantity = product_id_and_quantity # [1,5]
  
        self.placements.build(product_id: id, quantity: quantity)
      end
    end
end
