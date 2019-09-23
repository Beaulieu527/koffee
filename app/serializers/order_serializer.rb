class OrderSerializer < ActiveModel::Serializer
  attributes :id, :amount 
  has_many :products, serializer: ProductSerializer
end
