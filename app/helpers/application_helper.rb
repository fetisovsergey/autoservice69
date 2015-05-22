module ApplicationHelper
# Returns the full title on a per-page basis.
  def full_title(page_title)
#    base_title = "АвтоСервис69"
   base_title = "AutoService69" 
   if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
end
