import React from 'react';
import { target_images, non_target_images } from '../components/Image';

import { getNextRoundImages } from '../functions/getNextRound';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from '../slices/ExcelSlice';

const SixgridPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [imagesState, setImages] = useState([]);
	const [trialNumber, setTrialNumber] = useState(4);
	const [targetIndex, setTargetIndex] = useState(3);
	const [nonTargetStart, setNonTargetStart] = useState(23);

	const [selectedImagesArray, setSelectedImagesArray] = useState([]);
	const [attempts, setAttempts] = useState(0);
	let start = new Date().getTime();

	useEffect(() => {
		const subscribe = async () => {
		  let images = [];
		//   let targetPhoto = target_images[targetIndex];
		  for (let k = nonTargetStart; k < 58; k++) {
			images.push(non_target_images[k]);
		  }
	  
		  return images;
		};
	  
		subscribe().then((images) => {
		  let shuffledImages = shuffleArray(images);
		  let randomIndex = Math.floor(Math.random() * 36);
		  shuffledImages.splice(randomIndex, 0, target_images[targetIndex]);
		  console.log('shuffled images', shuffledImages);
		  setImages(shuffledImages); // final array
		});
	  }, []);

	async function handleClickImage(image) {
		if (image?.category === 'non-target') {
			setAttempts(attempts + 1);
			setSelectedImagesArray((selectedImagesArray) => [
				...selectedImagesArray,
				image?.index,
			]);
		} else if (image?.category === 'target') {
			let startIndex = nonTargetStart + 35; //58
			let endIndex = startIndex + 35; //93
			setNonTargetStart(startIndex);

			setAttempts(1);

			setSelectedImagesArray([]);

			const end = new Date().getTime();
			const TimeTaken = end - start;
			start = 0;

			// get next round images
			let nextRoundImages = getNextRoundImages(
				startIndex,
				endIndex,
				non_target_images
			);
			nextRoundImages.push(target_images[targetIndex + 1]);
			setTargetIndex(targetIndex + 1);
			const shuffeledImages = await shuffleArray(nextRoundImages);
			setImages(shuffeledImages);


			
			dispatch(
				addData({
					trial: trialNumber,
					attempts: attempts,
					time: TimeTaken / 100,
				})
			);
			if (trialNumber === 13) {

				navigate(`/thanks`);
			} else {
				setTrialNumber(trialNumber + 1);
			}
		}
	}

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	  }
	return (
		<div className='container'>
			<div className='headerText'>6x6 Grid</div>
			<div className='image-grid-six'>
				{imagesState.map((image, key) => {
					return (
						<div
							className='grid-item'
							key={key}
							onClick={() => handleClickImage(image)}
						>
							<img
								src={image?.image}
								width='60px'
								height='60px'
								alt={image?.index}
								style={{
									opacity:
										selectedImagesArray.includes(image?.index) &&
										image?.category === 'non-target'
											? 0
											: 1,
								}}
							/>
						</div>
					);
					// }
				})}
			</div>
		</div>
	);
};

export default SixgridPage;