import os


root_path = "C:\\Users\\kiddi\\OneDrive\\Documents\\Code\\behavirol_project\\src\\assets"

def process_image_folder(folder_path, target_images, non_target_images):
    
    for filename in os.listdir(folder_path):
        if filename.startswith('C'):
            image_path = f'require("{os.path.join(folder_path, filename)}")'
            non_target_images.append({
                'index': len(non_target_images),
                'category': 'non-target',
                'image': image_path
            })

        elif filename.startswith('T'):
            image_path = f'require("{os.path.join(folder_path, filename)}")'
            target_images.append({
                'index': len(target_images),
                'category': 'target',
                'image': image_path
            })

target_images = []
non_target_images = []
for folder_name in os.listdir(root_path):
    if os.path.isdir(os.path.join(root_path, folder_name)):
        folder_path = os.path.join(root_path, folder_name)
        process_image_folder(folder_path, target_images, non_target_images)

with open('images.js', 'w') as f:
    f.write('export const target_images = [\n')
    for image in target_images:
        f.write(f'  {str(image)},\n')
    f.write(']\n\n')

    f.write('export const non_target_images = [\n')
    for image in non_target_images:
        f.write(f'  {str(image)},\n')
    f.write(']\n')
