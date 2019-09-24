class OrderLine < ApplicationRecord
    belongs_to :order, inverse_of: :order_lines
    belongs_to :product, inverse_of: :order_lines
end



