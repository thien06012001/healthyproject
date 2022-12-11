import React from 'react'
import BlogPic2 from '../public/assets/BlogPic2.png'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function BlogBody({}: Props) {
  return (
    <div className='grid grid-row bg-lime-50 h-full'>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px]'>
            An eating plan that helps manage your weight includes a variety of healthy foods.
            Add an array of colors to your plate and think of it as eating the rainbow. 
            Dark, leafy greens, oranges, and tomatoes,even fresh herbs,are loaded with vitamins, fiber, and minerals. 
            Adding frozen peppers, broccoli, or onions to stews and omelets gives them a quick and convenient boost of color and nutrients.
        </div>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px]'>
            According to the Dietary Guidelines for Americans 2020-2025, a healthy eating plan:
            <li>Emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk and milk products.</li>
            <li>Includes a variety of protein foods such as seafood, lean meats and poultry, eggs, legumes
                (beans and peas), soy products, nuts, and seeds.</li>
            <li>Is low in added sugars, sodium, saturated fats, trans fats, and cholesterol.</li>
            <li>Stays within your daily calorie needs.</li>
            USDA's MyPlate Plan can help you identify what and how much to eat from the different food groups while staying within your recommended calorie allowance. You can also download My Food Diary
            to help track your meals.
        </div>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px]'>
            <p className='font-bold text-[35px] uppercase'>Fruit</p>
            Fresh, frozen, or canned fruits are great choices. 
            Try fruits beyond apples and bananas such as mango, pineapple or kiwi fruit. 
            When fresh fruit is not in season, try a frozen, canned, or dried variety. 
            Be aware that dried and canned fruit may contain added sugars or syrups. 
            Choose canned varieties of fruit packed in water or in its own juice.
        </div>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px] flex flex-row'>
            <div>
                <p className='font-bold text-[35px] uppercase'>Vegetables</p>
                Add variety to grilled or steamed vegetables with an herb such as rosemary. 
                You can also sauté (pantry) vegetables in a non-stick pan with a small amount of cooking spray. 
                Or try frozen or canned vegetables for a quick side dish-just microwave and serve. 
                Look for canned vegetables without added salt, butter, or cream sauces. For variety, try a new vegetable each week.
            </div>
            <Image src={BlogPic2} alt={''} className='m-auto'/>
        </div>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px]'>
            <p className='font-bold text-[35px] uppercase'>Calcium-rich foods</p>
            In addition to fat-free and low-fat milk, consider low-fat and fat-free yogurts without added sugars. 
            These come in a variety of flavors and can be a great dessert substitute.
        </div>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px]'>
            <p className='font-bold text-[35px] uppercase'>Meat</p>
            If your favorite recipe calls for frying fish or breaded chicken, try healthier variations by baking or grilling. 
            Maybe even try dry beans in place of meats. 
            Ask friends and search the internet and magazines for recipes with fewer calories-you might be surprised to find you have a new favorite dish!
        </div>
        <div className='w-[1250px] m-auto text-[25px] mt-[60px]'>
            <p className='font-bold text-[35px] uppercase'>Comfort foods</p>
            Healthy eating is all about balance. 
            You can enjoy your favorite foods, even if they are high in calories, fat or added sugars. 
            The key is eating them only once in a while and balancing them with healthier foods and more physical activity. <br />
            Some general tips for comfort foods:
            <li>Eat them less often. If you normally eat these foods every day, cut back to once a week or once a month.</li>
            <li>Eat smaller amounts. If your favorite higher-calorie food is a chocolate bar, have a smaller size or only half a bar.</li>
            <li>Try a lower-calorie version.
                Use lower-calorie ingredients or prepare food differently. 
                For example, if your macaroni and cheese recipe includes whole milk, butter, and full-fat cheese, try to make it with non-fat milk, less butter, low-fat cheese, fresh spinach and tomatoes. 
                Just remember to not increase your portion size.</li>
        </div>
    </div>
  )
}

export default BlogBody