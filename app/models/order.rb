class Order < ApplicationRecord
    # before_validation :set_amount!
    # validates :amount, presence: true,
    #                  numericality: { greater_than_or_equal_to: 0 }

    validates :user_id, presence: true
    
    belongs_to :user
    has_many :order_lines
    has_many :products, through: :order_lines
    accepts_nested_attributes_for :products


    # def set_amount!
    #   self.amount = 0
    #   self.order_lines.each do |order_line|
    #     self.amount += order_line.product.price * order_line.quantity
    #   end
    # end

    def build_lines(products)
      [:products].each do |id, quantity|
        order_lines.build(product_id: id, quantity: quantity)
      end
    end
end
