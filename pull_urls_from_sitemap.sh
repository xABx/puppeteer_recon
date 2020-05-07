# This is a quick one-liner if you need to pull urls from a sitemap or other xml document. This assumes the urls are wrapped in <loc></loc> tags. Change the tag and file name etc. as needed.

# IMPORTANT, xmllint doesn't like the namespaces in your xml file (I mean -- it probably doesn't). You can either remove the namespaces or use xmllint --xpath "//*[local-name()='loc']" to find what you need. Again, this assumes the urls you want are inside a <loc></loc> tag.

#If you remove the name spaces use this
xmllint --xpath "//loc" sitemap.xml | sed 's/\<loc\>//g' | sed $'s/\<\\/loc\>/\\\n/g' > urls_from_sitemap.txt

#If you don't use this
xmllint --xpath "//*[local-name()='loc']" sitemap.xml | sed 's/\<loc\>//g' | sed $'s/\<\\/loc\>/\\\n/g' > urls_from_sitemap.txt

#And the '$' preceeds the last sed substitution because in bash strings preceeded by '$' with \n in them get the \n replaced with actual new line characters.

#Fair warning that you may need to change some syntax depending on what OS you are on.
