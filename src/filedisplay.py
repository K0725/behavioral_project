import os

#holder path
non_target_folder = "C:\\Users\\kiddi\\OneDrive\\Documents\\Code\\behavirol_project\\src\\assets\\non-target"

image_code_list = []

#itelate through the every image in the file
for index, filename in enumerate(os.listdir(non_target_folder)):
    if filename.endswith(".jpg") or filename.endswith(".png") or filename.endswith(".gif"):
        #print(filename)
        image_path = os.path.normpath(os.path.join(non_target_folder, filename)).replace("\\", "\\\\") 
        image_code = f'index: {index},\n  category: "target",\n  image: require("{image_path}")'
        image_code_list.append(f"{{ {image_code} }}")

final_js_code = "const images = [\n  " + ",\n  ".join(image_code_list) + "\n];"

with open("images.js", "w") as f:
    f.write(final_js_code)