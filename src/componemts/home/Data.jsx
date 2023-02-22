import React from "react";
import { motion } from "framer-motion";
import cv from "../../assets/Ahmed Esmail.pdf";

const Data = () => {
	return (
		<>
			<div className="home__data">
				<h1 className="home__title">
					Ahmed Esmail
					<motion.svg
						initial={{ rotate: -180, scale: 0 }}
						animate={{
							rotate: 0,
							scale: 1,
						}}
						transition={{
							type: "spring",
							stiffness: 120,
							damping: 20,
							duration: 1.5,
						}}
						width="40px"
						height="40px"
						viewBox="0 0 80 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M42.3063 34.8345C42.1613 36.1581 41.0715 37.7998 40.5945 37.8325C40.1174 37.8699 39.7245 36.7147 39.6403 35.5828C39.5561 34.4509 32.5451 39.6472 32.1242 39.853C31.8061 40.0074 28.2749 40.1664 25.8989 41.4386C25.1085 41.8642 23.7147 43.866 23.5089 43.8988C22.6904 44.025 21.8298 42.7388 21.0768 40.737C20.3238 38.7352 14.4727 45.0587 15.0667 47.9772C15.8618 51.8826 17.7373 64.4173 22.4612 67.8644C30.5293 73.7622 43.8451 72.5462 48.8449 66.7559C53.8448 60.9656 54.0412 57.3034 58.3395 52.5421C61.9783 48.5104 66.6601 49.1278 68.4374 47.0745C69.9294 45.344 67.7218 42.7108 66.8799 41.9858C65.3833 40.6949 59.9017 39.3058 55.5473 44.3524C53.8541 46.3122 51.7635 47.6077 49.7523 45.8725C47.7458 44.1373 48.2463 40.1664 49.1864 36.9485"
							fill="url(#paint0_linear)"
						/>
						<path
							d="M68.4374 47.0694C69.2466 46.1293 68.966 44.9226 68.4047 43.8983C66.5526 48.0516 61.3843 43.8422 51.6933 55.0767C42.0023 66.3112 32.6387 63.9352 29.4489 62.1579C26.2591 60.3806 24.0468 55.6426 22.5641 48.192C22.1105 45.9048 21.2592 43.2342 20.1694 40.5542C18.6073 41.499 15.8665 46.2463 16.7037 47.8833C18.5231 51.4332 15.9273 62.2234 22.4659 67.8686C30.0335 74.3979 43.8498 72.5505 48.8496 66.7602C53.8495 60.9699 54.0459 57.3077 58.3442 52.5464C61.983 48.51 66.6648 49.1274 68.4374 47.0694Z"
							fill="url(#paint1_linear)"
						/>
						<path
							d="M21.0768 40.737C20.3238 38.7305 18.8598 33.3846 17.6063 30.4848C16.3529 27.5849 14.4306 26.5981 12.1014 27.8281C9.77214 29.0582 11.7973 34.4603 12.2089 35.798C12.8357 37.8419 14.2809 44.8716 15.0667 47.9772"
							fill="url(#paint2_linear)"
						/>
						<path
							d="M32.1241 39.8575C31.7032 40.0633 30.286 38.9828 29.8698 35.3066C29.5517 32.5003 28.9484 24.6474 28.1112 20.6719C27.274 16.6963 26.0345 14.4185 23.6024 14.3952C21.1703 14.3718 20.3331 17.4259 20.6558 20.7233C21.058 24.8018 21.7549 29.1702 22.4191 33.3609C22.9383 36.6396 24.3227 43.7722 23.5042 43.8985"
							fill="url(#paint3_linear)"
						/>
						<path
							d="M22.4239 33.3653C22.915 36.4569 24.1731 42.9815 23.6259 43.8141C24.8373 43.3417 25.7212 39.9601 25.3003 38.2389C22.8682 28.286 23.0319 15.2274 22.0684 14.9141C20.8196 15.9196 20.4127 18.2535 20.6559 20.7277C21.0628 24.8015 21.7597 29.17 22.4239 33.3653Z"
							fill="url(#paint4_linear)"
						/>
						<path
							d="M49.1909 36.9391C50.131 33.7166 52.1047 22.1687 52.8624 19.1146C53.6201 16.0604 52.0252 14.255 50.0421 13.7826C48.059 13.3102 45.9777 14.4935 44.7289 20.6019C43.9431 24.4558 43.0779 27.8468 42.3062 34.8344L46.2303 38.693L49.1909 36.9391Z"
							fill="url(#paint5_linear)"
						/>
						<path
							d="M39.6403 35.5873C39.5561 34.4554 39.6777 23.4548 39.6403 21.0414C39.5701 16.5186 41.4129 8.55345 35.8612 8.02026C32.9426 7.73963 32.3206 10.4477 32.1896 11.6357C32.0587 12.8237 32.0867 26.2985 32.1756 27.5145C32.2645 28.7306 32.5451 39.647 32.1195 39.8528"
							fill="url(#paint6_linear)"
						/>
						<path
							d="M42.3062 34.8342C42.1658 36.1064 41.7543 37.5002 41.2959 37.5797C44.916 38.197 45.973 29.1842 46.7401 23.9224C47.3341 19.8533 49.8504 16.6635 50.1965 13.8198C50.145 13.8058 50.0936 13.7918 50.0375 13.7777C48.0544 13.3053 45.973 14.4887 44.7242 20.597C43.9432 24.4556 43.0779 27.8466 42.3062 34.8342Z"
							fill="url(#paint7_linear)"
						/>
						<path
							d="M32.1803 27.5197C32.2691 28.7358 32.5498 39.6522 32.1242 39.858C35.8378 39.0301 35.0474 26.4908 34.7854 20.2748C34.5609 14.8868 36.3289 11.8654 34.865 8.04883C32.7977 8.39961 32.3066 10.5979 32.1896 11.6409C32.0587 12.8289 32.0914 26.299 32.1803 27.5197Z"
							fill="url(#paint8_linear)"
						/>
						<path
							d="M31.881 39.886C31.5817 39.8345 30.9035 38.9693 30.5247 38.104C30.7258 38.8617 31.3057 39.8907 31.881 39.886Z"
							fill="url(#paint9_linear)"
						/>
						<path
							d="M66.674 43.0237C68.3204 43.9966 68.4326 44.3801 68.3999 43.8984C67.9275 43.0378 67.2634 42.3081 66.8798 41.9807C65.3832 40.6898 59.9016 39.3007 55.5472 44.3474C53.854 46.3071 51.7633 47.6026 49.7522 45.8674C48.9617 45.1846 48.5034 44.0387 48.2695 42.7057C48.4286 49.6512 54.3685 48.3603 56.9643 46.2042C59.5648 44.0387 61.8426 40.166 66.674 43.0237Z"
							fill="url(#paint10_radial)"
						/>
						<path
							d="M49.2846 13.689C47.5447 13.689 45.8188 15.2652 44.7291 20.6018C43.9433 24.4557 43.078 27.8466 42.3063 34.8343C42.1613 36.1579 41.0715 37.7996 40.5945 37.8323C44.7197 34.259 44.6916 25.3303 46.0854 20.7608C47.1892 17.1454 48.3538 15.5879 49.2846 13.689Z"
							fill="url(#paint11_linear)"
						/>
						<path
							d="M32.1803 27.5191C32.2691 28.7352 32.5498 39.6516 32.1242 39.8574C34.1073 40.0398 34.444 37.9585 34.1868 34.4273C33.6536 27.1918 32.7509 17.3043 34.285 11.1305C34.43 10.5458 34.3084 9.9191 33.9061 9.4701C32.8631 8.30549 32.2879 10.7329 32.1896 11.6403C32.0587 12.8283 32.0914 26.2984 32.1803 27.5191Z"
							fill="url(#paint12_linear)"
						/>
						<path
							d="M20.6604 20.7233C21.0626 24.8018 21.7595 29.1702 22.4237 33.361C22.9428 36.6396 24.3273 43.7722 23.5088 43.8985C27.8117 43.6039 21.362 26.4482 22.0729 14.9097C20.8288 15.9153 20.4172 18.2491 20.6604 20.7233Z"
							fill="url(#paint13_linear)"
						/>
						<path
							d="M22.6344 43.9502C22.9618 44.0344 23.1769 44.0157 23.3126 43.9175C22.597 43.9362 21.7691 42.5751 21.0769 40.737C20.3239 38.7305 18.8599 33.3846 17.6065 30.4848C17.0546 29.2126 16.3764 28.3052 15.5859 27.7954C16.3764 29.1611 15.6888 29.1377 17.2463 32.5474C18.0835 34.3715 20.5203 43.3936 22.6344 43.9502Z"
							fill="url(#paint14_linear)"
						/>
						<path
							d="M28.2374 29.7036C28.4338 33.1133 29.533 39.5209 31.7546 39.853C31.2448 39.6472 30.1924 38.1692 29.8697 35.3115C29.5517 32.5052 28.9483 24.6523 28.1111 20.6768C27.4329 17.4496 26.4928 15.3448 24.8699 14.6479C27.9427 18.9416 28.0503 26.4811 28.2374 29.7036Z"
							fill="url(#paint15_linear)"
						/>
						<path
							d="M38.4523 22.9871C38.6113 28.0945 37.6244 37.0887 40.4447 37.8043C40.0331 37.6219 39.7151 36.5976 39.6403 35.5873C39.5561 34.4554 39.6777 23.4548 39.6403 21.0414C39.5935 17.9078 40.4588 13.123 39.1538 10.3027C39.8461 13.8714 38.3213 18.8525 38.4523 22.9871Z"
							fill="url(#paint16_linear)"
						/>
						<path
							d="M48.2743 42.7011C47.9142 40.6478 48.6251 38.8892 49.191 36.9389C50.1311 33.7163 52.1049 22.1685 52.8626 19.1143C53.0918 18.1836 53.1058 17.3697 52.9514 16.6729C52.61 18.09 51.6419 19.5727 51.3051 22.3836C50.7672 26.8971 48.8122 33.8987 48.1387 36.3075C47.4652 38.7115 45.6785 42.8929 48.2743 42.7011Z"
							fill="url(#paint17_linear)"
						/>
						<path
							d="M36.0951 71.9615C37.0258 69.1599 36.8762 66.8307 34.0605 66.4612C26.3807 65.4603 25.0711 58.5756 20.3565 47.5422C16.1518 37.7016 14.6037 31.4389 11.8395 28.0059C9.94524 29.5072 11.8208 34.5164 12.2136 35.798C12.8404 37.8419 17.0405 62.5792 22.4612 67.8644C25.9176 71.2319 31.2262 72.2141 36.0951 71.9615Z"
							fill="url(#paint18_linear)"
						/>
						<path
							d="M68.8631 45.0447C68.0306 47.1166 65.5003 47.4113 61.4779 48.155C57.1188 48.9547 53.1433 52.6169 51.0853 57.9302C49.0274 63.2434 42.3672 67.2751 37.8958 66.5127C33.4198 65.7503 22.7793 70.1749 19.192 51.7002C19.192 51.6955 19.192 51.6909 19.1873 51.6862C19.0517 50.4608 20.0432 49.2681 19.51 48.3514C15.8011 42.0092 14.281 37.2713 13.2754 33.4267C13.0743 32.6736 12.8545 30.0591 11.021 29.9048C11.0023 30.1574 11.0023 30.4146 11.0163 30.6812C11.0163 30.7046 11.021 30.7326 11.021 30.756C11.021 30.7747 11.0257 30.7934 11.0257 30.8168C11.0397 31.0413 11.0631 31.2705 11.0959 31.5044C11.1005 31.5324 11.1052 31.5605 11.1052 31.5886C11.1052 31.6073 11.1099 31.6213 11.1099 31.64C11.152 31.9113 11.1988 32.1825 11.2549 32.4491C11.2549 32.4538 11.2549 32.4538 11.2549 32.4585C11.3063 32.7157 11.3671 32.9683 11.4326 33.2162C11.442 33.2489 11.4466 33.277 11.456 33.3097C11.4654 33.3425 11.47 33.3705 11.4794 33.4033C11.5308 33.6091 11.587 33.8055 11.6431 33.9973C11.6571 34.0394 11.6665 34.0861 11.6805 34.1236C11.746 34.3434 11.8068 34.5492 11.8676 34.7409C11.8957 34.8298 11.9237 34.914 11.9518 34.9982C11.9798 35.0824 12.0079 35.1712 12.0313 35.2461C12.1014 35.4659 12.1669 35.6623 12.209 35.8027C12.8358 37.8466 14.281 44.8763 15.0667 47.9819C15.1088 48.197 15.1603 48.4496 15.2117 48.7209C15.2398 48.8706 15.2725 49.0436 15.3053 49.2073C15.3053 49.2073 15.3053 49.2073 15.3053 49.212C16.1705 53.08 16.9984 56.7468 17.4614 58.6551C17.6438 59.2725 17.8403 59.8852 18.0508 60.4886C18.0554 60.5026 18.0601 60.5166 18.0648 60.5306C18.7009 62.3547 19.4492 64.0666 20.3379 65.4557C20.9459 66.3256 21.6288 67.1488 22.4613 67.8691C30.0289 74.3983 43.8451 72.5509 48.845 66.7606C53.8448 60.9703 54.0413 57.3081 58.3396 52.5468C61.9784 48.5151 66.6602 49.1325 68.4375 47.0792C68.9613 46.4665 69.0268 45.7509 68.8631 45.0447Z"
							fill="url(#paint19_radial)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1="31.8479"
								y1="78.3301"
								x2="38.1705"
								y2="58.491"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.00132565" stop-color="#FFCB4B" />
								<stop offset="1" stop-color="#FFD748" />
							</linearGradient>
							<linearGradient
								id="paint1_linear"
								x1="42.4121"
								y1="69.6554"
								x2="42.7991"
								y2="42.5218"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.00132565" stop-color="#FFCB4B" />
								<stop offset="1" stop-color="#FFD748" />
							</linearGradient>
							<linearGradient
								id="paint2_linear"
								x1="12.1159"
								y1="30.4619"
								x2="17.4333"
								y2="41.4968"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.00132565" stop-color="#FFCB4B" />
								<stop offset="1" stop-color="#FFD748" />
							</linearGradient>
							<linearGradient
								id="paint3_linear"
								x1="25.4352"
								y1="11.5817"
								x2="26.7541"
								y2="37.5815"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.00132565" stop-color="#FFCB4B" />
								<stop offset="1" stop-color="#FFD748" />
							</linearGradient>
							<linearGradient
								id="paint4_linear"
								x1="28.2579"
								y1="28.6875"
								x2="20.2094"
								y2="29.6936"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFA754" />
							</linearGradient>
							<linearGradient
								id="paint5_linear"
								x1="49.91"
								y1="18.3467"
								x2="44.5784"
								y2="36.9022"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.00132565" stop-color="#FFCB4B" />
								<stop offset="1" stop-color="#FFD748" />
							</linearGradient>
							<linearGradient
								id="paint6_linear"
								x1="36.7346"
								y1="12.663"
								x2="34.9702"
								y2="36.2393"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.00132565" stop-color="#FFCB4B" />
								<stop offset="1" stop-color="#FFD748" />
							</linearGradient>
							<linearGradient
								id="paint7_linear"
								x1="50.1616"
								y1="26.1753"
								x2="38.2677"
								y2="24.8354"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFA754" />
							</linearGradient>
							<linearGradient
								id="paint8_linear"
								x1="37.9824"
								y1="24.3162"
								x2="22.8997"
								y2="23.0969"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFA754" />
							</linearGradient>
							<linearGradient
								id="paint9_linear"
								x1="38.3912"
								y1="39.5785"
								x2="18.1921"
								y2="37.9456"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFA754" />
							</linearGradient>
							<radialGradient
								id="paint10_radial"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(58.3459 39.1776) rotate(40.7903) scale(14.6648)"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFA754" />
							</radialGradient>
							<linearGradient
								id="paint11_linear"
								x1="57.1006"
								y1="25.3291"
								x2="39.604"
								y2="25.9506"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FF8900" />
							</linearGradient>
							<linearGradient
								id="paint12_linear"
								x1="43.2725"
								y1="24.2877"
								x2="29.8209"
								y2="24.5778"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FF8900" />
							</linearGradient>
							<linearGradient
								id="paint13_linear"
								x1="33.2616"
								y1="28.7011"
								x2="17.1839"
								y2="29.7873"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FF8900" />
							</linearGradient>
							<linearGradient
								id="paint14_linear"
								x1="16.9484"
								y1="26.3365"
								x2="21.8408"
								y2="44.9495"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFBC47" />
							</linearGradient>
							<linearGradient
								id="paint15_linear"
								x1="29.6256"
								y1="17.2194"
								x2="26.9972"
								y2="37.2879"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFBC47" />
							</linearGradient>
							<linearGradient
								id="paint16_linear"
								x1="36.6048"
								y1="23.8641"
								x2="40.5589"
								y2="24.098"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFA754" />
							</linearGradient>
							<linearGradient
								id="paint17_linear"
								x1="43.7286"
								y1="42.1386"
								x2="53.909"
								y2="23.7255"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FFBC47" />
							</linearGradient>
							<linearGradient
								id="paint18_linear"
								x1="20.4746"
								y1="50.097"
								x2="10.7331"
								y2="50.4024"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FF8900" />
							</linearGradient>
							<radialGradient
								id="paint19_radial"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(37.1458 42.8336) rotate(86.8961) scale(41.6729 37.8272)"
							>
								<stop offset="0.6134" stop-color="#FFBC47" stop-opacity="0" />
								<stop offset="1" stop-color="#FF8900" />
							</radialGradient>
						</defs>
					</motion.svg>
				</h1>
				<h3 className="home__subtitle">Pharmacist</h3>
				<p className="home__description">
					Highly motivated with a passion for healthcare and a strong commitment
					to patient care.Have comprehensive understanding of pharmacology and
					drug therapy, seeking a role as a medical representative in a dynamic
					drug company
				</p>
				<div
					style={{
						display: "flex",
						flex: 1,
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<motion.a
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 0.7,
						}}
						href="#contact"
						className="button button--flex"
					>
						Say Hello
						<svg
							initial={{ scale: 0 }}
							animate={{ rotate: 180, scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 20,
							}}
							width="25px"
							height="25px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
								stroke="var(--container-color)"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10.11 13.6501L13.69 10.0601"
								stroke="var(--container-color)"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</motion.a>
					<motion.a
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
						}}
						download={cv}
						href={cv}
						className="button button--flex"
					>
						Download CV
						<svg
							width="25px"
							height="25px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 3C12.5523 3 13 3.44772 13 4V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071L7.2929 11.7071C6.90238 11.3166 6.90238 10.6834 7.2929 10.2929C7.68342 9.90237 8.31659 9.90237 8.70711 10.2929L11 12.5858V4C11 3.44772 11.4477 3 12 3ZM4.00001 14C4.55229 14 5.00001 14.4477 5.00001 15C5.00001 15.9772 5.00485 16.3198 5.05765 16.5853C5.29437 17.7753 6.22466 18.7056 7.41474 18.9424C7.68018 18.9952 8.02276 19 9.00001 19H15C15.9772 19 16.3198 18.9952 16.5853 18.9424C17.7753 18.7056 18.7056 17.7753 18.9424 16.5853C18.9952 16.3198 19 15.9772 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15C21 15.0392 21 15.0777 21 15.1157C21.0002 15.9334 21.0004 16.4906 20.9039 16.9755C20.5094 18.9589 18.9589 20.5094 16.9755 20.9039C16.4907 21.0004 15.9334 21.0002 15.1158 21C15.0778 21 15.0392 21 15 21H9.00001C8.96084 21 8.92225 21 8.88423 21C8.06664 21.0002 7.50935 21.0004 7.02456 20.9039C5.0411 20.5094 3.49061 18.9589 3.09608 16.9755C2.99965 16.4906 2.99978 15.9334 2.99999 15.1158C3 15.0777 3.00001 15.0392 3.00001 15C3.00001 14.4477 3.44772 14 4.00001 14Z"
								fill="var(--container-color)"
							/>
						</svg>
					</motion.a>
				</div>
			</div>
		</>
	);
};

export default Data;
