def reverse_string(str)
  # type your code in here
  length = str.length
  characters  = str.split("")
  r;
  characters.each do |character|
  r.append(character)
  end
r.join
return r 
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution