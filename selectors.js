const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seededFruits = document.getElementsByClassName('seed')
    // const seededFruits = fruits.filter(fruit => fruit.seed)
    console.log(seededFruits)
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessFruits = document.getElementsByClassName('seedless')
    console.log(seedlessFruits)
    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = document.body.children[1].children[2].children[2]
    console.log(firstSeedless)
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const you = document.getElementById('wrapper').children[0].children[0]
    console.log(you)
    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChildren = document.getElementById('wrapper').children
    console.log(wrapperChildren)
    // 6. Get all odd number list items in the list
    // Your code here
    const oddNums = document.getElementsByClassName('odd')
    console.log(oddNums)
    // 7. Get all even number list items in the list
    // Your code here
    const olElement = document.querySelector('ol');
    const evenNums = olElement.querySelectorAll('li:not(.odd)');
    console.log(evenNums);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const techCompanies = document.querySelectorAll('a')
    console.log(techCompanies)
    // 9. Get "Amazon" list element
    // Your code here1
    

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const elements = document.querySelectorAll("*");

    const nonImages = Array.from(elements).filter((element) => {
    return element.tagName.toLowerCase() !== "img";
    });

    console.log(nonImages);
}

window.onload = select;