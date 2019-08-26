export const RBGgenerator = () => {
	const r = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
    return { r, b, g}
}


export const mutateRBG = ({r,b,g}) => {
	const newR = r + Math.floor(Math.random() * 20) + 10;
	const newB = B + Math.floor(Math.random() * 20) + 10;
	const newG = G + Math.floor(Math.random() * 20) + 10;
   return { r: newR, g: newG, b: newB }

}