import os

root_path = "C:/Users/kiddi/OneDrive/Documents/Code/behavirol_project/public/assets"

def process_image_folder(folder_path, target_images, non_target_images):
    for i, filename in enumerate(os.listdir(folder_path)):
        if filename.startswith('C'):
            image_path = f'../assets/{folder_path.split("/")[-1]}/{filename}'
            non_target_images.append({
                'index': i,
                'category': 'non-target',
                'image': image_path,
            })
        elif filename.startswith('T'):
            image_path = f'../assets/{folder_path.split("/")[-1]}/{filename}'
            target_images.append({
                'index': i,
                'category': 'target',
                'image': image_path,
            })

target_images = []
non_target_images = []
for folder_name in sorted(os.listdir(root_path), key=lambda x: int(x)):
    if os.path.isdir(os.path.join(root_path, folder_name)):
        folder_path = os.path.join(root_path, folder_name)
        process_image_folder(folder_path, target_images, non_target_images)

with open('images.js', 'w') as f:
    f.write('[')
    for i, image_dict in enumerate(non_target_images):
        if i > 0:
            f.write(',\n')
        f.write('{')
        for key, value in image_dict.items():
            if key == 'index':
                value = str(i)
            f.write(f'{key}: "{value}", ')
        f.write('}')
    f.write(']')
