const express = require('express')
const router = express.Router()



//************* routes for /create-cases-add-products ************* starts

router.post('/find-the-product', function (req, res) {
  const isrelated = req.session.data['related']

  if (isrelated == null) {
    res.redirect('/create-cases-add-products/find-the-product-error')
  } else if (isrelated == 'yes') {
      res.redirect('/create-cases-add-products/products-page')
  } else if (isrelated == 'no') {
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid')
  }
})
router.post('/find-the-product-error', function (req, res) {
  const isrelatederror = req.session.data['related']

  if (isrelatederror == null) {
    res.redirect('/create-cases-add-products/find-the-product-error')
  } else if (isrelatederror == 'yes') {
      res.redirect('/create-cases-add-products/products-page')
  } else if (isrelatederror == 'no') {
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid')
  }
})
//************* is-this-case-related-to-covid ************* starts
router.post('/is-this-case-related-to-covid', function (req, res) {
  const iscovid = req.session.data['covid-related']

  if (iscovid == null) {
    res.redirect('/create-cases-add-products/is-this-case-related-to-covid-error' )
  } else {
    res.redirect('/create-cases-add-products/reason-for-creating-case' )
  }
})
router.post('/is-this-case-related-to-covid-error', function (req, res) {
  const iscoviderror = req.session.data['covid-related']

  if (iscoviderror != null) {
    res.redirect('/create-cases-add-products/reason-for-creating-case' )
  }
})
//********************* start reason-for-creating-case
router.post('/reason-for-creating-case', function (req, res) {
  const casereason = req.session.data['reason']

  if (casereason == null) {
    res.redirect('/create-cases-add-products/reason-for-creating-case-error' )
  } else if (casereason == 'issafeoption') {
      res.redirect('/create-cases-add-products/is-case-counterfeit' )
  } else {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern' )
  }
})
router.post('/reason-for-creating-case-error', function (req, res) {
  const casereasonerror = req.session.data['reason']

  if (casereasonerror != null) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern' )
  }
})
//********************* why is the product of concern
router.post('/why-is-the-product-of-concern', function (req, res) {
  const safety = req.session.data['safety']

  if (safety == null) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error' )
  } else if ((safety != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/create-cases-add-products/is-case-counterfeit' )
  }
})
router.post('/why-is-the-product-of-concern-error', function (req, res) {
  if ((req.session.data['safety'] == null)) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error' )
  } else if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/create-cases-add-products/is-case-counterfeit' )
  }
})
router.post('/why-is-the-product-of-concern-error-2', function (req, res) {
  if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/create-cases-add-products/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/create-cases-add-products/is-case-counterfeit' )
  }
})
//******************* is-case-counterfeit
router.post('/is-case-counterfeit', function (req, res) {
  const counterfeit = req.session.data['counterfeit']

  if (counterfeit == null) {
    res.redirect('/create-cases-add-products/is-case-counterfeit-error' )
  } else {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std' )
  }
})
router.post('/is-case-counterfeit-error', function (req, res) {
  const counterfeiterror = req.session.data['counterfeit']

  if (counterfeiterror != null) {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std' )
  }
})
//************* start does-the-product-have-a-brand
router.post('/does-the-product-have-a-brand', function (req, res) {
  var branded = req.session.data['branded']
  var brand = req.session.data['brand']

  if (branded == null) {
    return res.redirect('/create-cases-add-products/does-the-product-have-a-brand-error')
  } else if ((branded == 'yes') && (brand == '')) {
    return res.redirect('/create-cases-add-products/does-the-product-have-a-brand-error-2')
  } else {
    return res.redirect('/create-cases-add-products/what-is-the-product-name')
  }
})
router.post('/does-the-product-have-a-brand-error', function (req, res) {
  var branded1 = req.session.data['branded']
  var brand1 = req.session.data['brand']

  if (branded1 == null) {
    return res.redirect('/create-cases-add-products/does-the-product-have-a-brand-error')
  } else if ((branded1 == 'yes') && (brand1 == '')) {
    return res.redirect('/create-cases-add-products/does-the-product-have-a-brand-error-2')
  } else if ((branded1 == 'yes') && (brand1 != '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-name')
  }
})
router.post('/does-the-product-have-a-brand-error-2', function (req, res) {
  var branded2 = req.session.data['branded']
  var brand2 = req.session.data['brand']

  if (branded2 == null) {
    return res.redirect('/create-cases-add-products/does-the-product-have-a-brand-error')
  } else if ((branded2 == 'yes') && (brand2 == '')) {
    return res.redirect('/create-cases-add-products/does-the-product-have-a-brand-error-2')
  } else if ((branded2 == 'yes') && (brand2 != '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-name')
  }
})
//************* what is the product name
router.post('/what-is-the-product-name', function (req, res) {
  var productname = req.session.data['productname']

  if (productname == '') {
    return res.redirect('/create-cases-add-products/what-is-the-product-name-error')
  } else {
    return res.redirect('/create-cases-add-products/what-is-the-product-category')
  }
})
router.post('/what-is-the-product-name-error', function (req, res) {
  var productname2 = req.session.data['productname']

  if (productname2 == '') {
    return res.redirect('/create-cases-add-products/what-is-the-product-name-error')
  } else {
    return res.redirect('/create-cases-add-products/what-is-the-product-category')
  }
})
//************* start what-is-the-product-category
router.post('/what-is-the-product-category', function (req, res) {
  var category = req.session.data['category']
  var subcategory = req.session.data['subcategory']

  if ((category == '') && (subcategory == '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error-2')
  } else if ((category == '') && (subcategory != '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error')
  } else if ((category != '') && (subcategory == '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error-3')
  } else {
    return res.redirect('/create-cases-add-products/does-the-product-have-marking')
  }
})
router.post('/what-is-the-product-category-error', function (req, res) {
  var category1 = req.session.data['category']
  var subcategory1 = req.session.data['subcategory']

  if ((category1 == '') && (subcategory1 == '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error-2')
  } else if ((category1 == '') && (subcategory1 != '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error')
  } else if ((category1 != '') && (subcategory1 == '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error-3')
  } else {
    return res.redirect('/create-cases-add-products/does-the-product-have-marking')
  }
})
router.post('/what-is-the-product-category-error-3', function (req, res) {
  var category3 = req.session.data['category']
  var subcategory3 = req.session.data['subcategory']

  if ((category3 == '') && (subcategory3 == '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error-2')
  } else if ((category3 == '') && (subcategory3 != '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error')
  } else if ((category3 != '') && (subcategory3 == '')) {
    return res.redirect('/create-cases-add-products/what-is-the-product-category-error-3')
  } else {
    return res.redirect('/create-cases-add-products/does-the-product-have-marking')
  }
})
//************* start does-the-product-have-marking
router.post('/does-the-product-have-marking', function (req, res) {
  var marking = req.session.data['marking']

  if (marking == null) {
    res.redirect('/create-cases-add-products/does-the-product-have-marking-error')
  } else {
    res.redirect('/create-cases-add-products/might-already-exist')
  }
})
router.post('/does-the-product-have-marking-error', function (req, res) {
  var marking2 = req.session.data['marking']
  var mark2 = req.session.data['mark']

  if (marking2 == null) {
    res.redirect('/create-cases-add-products/does-the-product-have-marking-error')
  } else if ((marking2 == 'yes') && (mark2 == null)) {
    res.redirect('/create-cases-add-products/does-the-product-have-marking-error-2')
  } else {
    res.redirect('/create-cases-add-products/might-already-exist')
  }
})
router.post('/does-the-product-have-marking-error-2', function (req, res) {
  var marking3 = req.session.data['marking']
  var mark3 = req.session.data['mark']

  if ((marking3 == 'yes') && (mark3 == null)) {
    res.redirect('/create-cases-add-products/does-the-product-have-marking-error-2')
  } else {
    res.redirect('/create-cases-add-products/might-already-exist')
  }
})
// *********************** start might-already-exist
router.post('/might-already-exist', function (req, res) {
  var isit = req.session.data['isit']

  if (isit == null) {
    res.redirect('/create-cases-add-products/might-already-exist-error')
  } else if (isit == 'yes') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  } else if (isit == 'no') {
    res.redirect('/create-cases-add-products/describe-the-product')
  }
})
router.post('/might-already-exist-error', function (req, res) {
  var isit2 = req.session.data['isit']

  if (isit2 == null) {
    res.redirect('/create-cases-add-products/might-already-exist-error')
  } else if (isit2 == 'yes') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  } else if (isit2 == 'no') {
    res.redirect('/create-cases-add-products/describe-the-product')
  }
})
//************* start describe-the-product
router.post('/describe-the-product', function (req, res) {
  var description = req.session.data['description']

  if (description.length == 0) {
    res.redirect('/create-cases-add-products/describe-the-product-error')
  } else if (description.length > 1000) {
    res.redirect('/create-cases-add-products/describe-the-product-error')
  } else {
    res.redirect('/create-cases-add-products/when-was-the-product-placed')
  }
})
router.post('/describe-the-product-error', function (req, res) {
  var description2 = req.session.data['description']

  if (description2.length > 1000) {
    res.redirect('/create-cases-add-products/describe-the-product-error')
  } else {
    res.redirect('/create-cases-add-products/when-was-the-product-placed')
  }
})
//************* start when-was-the-product-placed
router.post('/when-was-the-product-placed', function (req, res) {
  var whenval = req.session.data['when']

  if (whenval == null) {
    res.redirect('/create-cases-add-products/when-was-the-product-placed-error')
  } else {
    res.redirect('/create-cases-add-products/can-you-provide-an-image')
  }
})
router.post('/when-was-the-product-placed-error', function (req, res) {
  var whenval2 = req.session.data['when']

  if (whenval2 == null) {
    res.redirect('/create-cases-add-products/when-was-the-product-placed-error')
  } else {
    res.redirect('/create-cases-add-products/can-you-provide-an-image')
  }
})
//****************** can-you-provide-an-image
router.post('/can-you-provide-an-image', function (req, res) {
  const productimage = req.session.data['productimage']

  if (productimage == null) {
    res.redirect('/create-cases-add-products/can-you-provide-an-image-error')
  } else if (productimage == 'no') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  } else {
    res.redirect('/create-cases-add-products/upload-a-product-image')
  }
})
router.post('/can-you-provide-an-image-error', function (req, res) {
  const productimage2 = req.session.data['productimage']

  if (productimage2 == null) {
    res.redirect('/create-cases-add-products/can-you-provide-an-image-error')
  } else if (productimage2 == 'no') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  }else{
    res.redirect('/create-cases-add-products/upload-a-product-image')
  }
})
//************ start upload-a-product-image
router.post('/upload-a-product-image', function (req, res) {
  var imagetitle = req.session.data['imagetitle']
  var imagedesc = req.session.data['imagedesc']
  var another = req.session.data['another']

  if ((imagetitle == '') || (imagedesc == '') || (another == null)){
    res.redirect('/create-cases-add-products/upload-a-product-image-error')
  } else if (another == 'no') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  } else if (another == 'yes') {
    res.redirect('/create-cases-add-products/upload-a-product-image-success')
  }
})
router.post('/upload-a-product-image-error', function (req, res) {
  var imagetitle2 = req.session.data['imagetitle']
  var imagedesc2 = req.session.data['imagedesc']
  var another2 = req.session.data['another']

  if ((imagetitle2 == '') || (imagedesc2 == '') || (another2 == null)){
    res.redirect('/create-cases-add-products/upload-a-product-image-error')
  } else if (another2 == 'no') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  } else if (another2 == 'yes') {
    res.redirect('/create-cases-add-products/upload-a-product-image-success')
  }
})
//************ start upload-a-product-image-success
router.post('/upload-a-product-image-success', function (req, res) {
  var imagetitle2 = req.session.data['imagetitle']
  var imagedesc2 = req.session.data['imagedesc']
  var another2 = req.session.data['another']

  if ((imagetitle2 == '') || (imagedesc2 == '') || (another2 == null)){
    res.redirect('/create-cases-add-products/upload-a-product-image-error')
  } else if (another2 == 'no') {
    res.redirect('/create-cases-add-products/how-many-units-are-affected-std')
  } else if (another2 == 'yes') {
    res.redirect('/create-cases-add-products/upload-a-product-image-success')
  }
})



module.exports = router