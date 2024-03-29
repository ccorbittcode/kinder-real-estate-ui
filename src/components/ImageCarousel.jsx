// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from "react-swipeable-views-react-18-fix"
// import './ImageCarousel.css';

// function ImageCarousel({ property }) {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   const images = property.images;
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div className="carousel-div">
//       <Box
//         sx={{ maxWidth: "1000px", flexGrow: 1 }}
//         className="image-carousel-main"
//       >
//         <SwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={activeStep}
//           onChangeIndex={handleStepChange}
//           enableMouseEvents
//         >
//           {images.map((step, index) => (
//             <div key={step}>
//               {Math.abs(activeStep - index) <= 2 ? (
//                 <Box
//                   className="image-carousel-box"
//                   component="img"
//                   sx={{
//                     display: 'block',
//                     maxWidth: "1000px",
//                     overflow: 'hidden',
//                     maxHeight: "637px",
//                   }}
//                   src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1000,h_637/v1704205644/${step}.png`}
//                   alt={step}
//                 />
//               ) : null}
//             </div>
//           ))}
//         </SwipeableViews>
//         <MobileStepper
//           className="image-carousel-stepper"
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//           nextButton={
//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === maxSteps - 1}
//             >
//               Next
//               {theme.direction === 'rtl' ? (
//                 <KeyboardArrowLeft />
//               ) : (
//                 <KeyboardArrowRight />
//               )}
//             </Button>
//           }
//           backButton={
//             <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//               {theme.direction === 'rtl' ? (
//                 <KeyboardArrowRight />
//               ) : (
//                 <KeyboardArrowLeft />
//               )}
//               Back
//             </Button>
//           }
//         />
//       </Box>
//     </div>
//   );
// }

// export default ImageCarousel;
