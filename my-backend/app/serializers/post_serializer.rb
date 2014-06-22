class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :date
end
