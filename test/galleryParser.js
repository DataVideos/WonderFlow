const fs = require('fs')
const JSON5 = require('json5')

const tableData = 'army-military-comparison\tChina vs Japan - Who Would Win - Army / Military Comparison\tbar chart\thttps://youtu.be/eBV4GmK4kO4?t=33\n' +
    'australia-fire\tWhy does climate change make wildfires worse?\tbar chart\thttps://youtu.be/mypEs1SBAUg?t=197\n' +
    'commute-mode\tWhy American public transit is so bad | 2020 Election\tpie chart\thttps://youtu.be/-ZDZtBRTyeI?t=80\n' +
    'scottish-independence-referendum\tScottish independence referendum 2014 explained | Guardian Animations\tmap chart \thttps://youtu.be/zIeVmqVB9pQ?t=29\n' +
    'house-prices\tWhy are houses so expensive?\tline chart\thttps://youtu.be/vhAXp0xzMFg?t=189\n' +
    'share-of-profits\tHow American CEOs got so rich\tline chart\thttps://youtu.be/ylLTMYt24lA?t=299\n' +
    'wealth-inequality\tWealth Inequality in America\tbar chart\thttps://youtu.be/QPKKQnijnsM?t=161\n' +
    'in-n-out\tWhy In-N-Out Isn\'t Coming to a City Near You\tmap chart\thttps://youtu.be/xfQBkdLa6fo?t=17\n' +
    'accounting-of-pirates\tHow Somalia’s Pirates Make Money\tpie chart (donuts)\thttps://youtu.be/dZh0B8AYxac?t=389\n' +
    'shortage-of-water\tDubai\'s Plan to Outlive Oil\tmap chart\thttps://youtu.be/-dsM8zPGqa0?t=159\n' +
    'sat-score\tThe problem with America\'s college entrance exam\tbar chart\thttps://youtu.be/WjVVwMGJ9S8?t=334\n' +
    'transportation-mode\tWhy American public transit is so bad | 2020 Election\tbar chart (grouped bar)\thttps://youtu.be/-ZDZtBRTyeI?t=243';
const table = tableData.split('\n').map(row => row.split('\t'))

const transcriptFileList = fs.readdirSync('../public/data/transcript');
const transcriptMap = new Map();
transcriptFileList.forEach(filename => {
  const tran = JSON5.parse(fs.readFileSync('../public/data/transcript/' + filename).toString())
  transcriptMap.set(filename.replaceAll(".json", ""), tran.results[0].alternatives[0].transcript)
})

const projList = JSON5.parse(fs.readFileSync('../src/assets/projects.json5').toString())
const result = projList.map(p => {
  const tempId = p.id.replaceAll('-example1', '');
  const item = table.find(row => row[0] === tempId)
  console.log(tempId, item)
  return {
    id: p.id,
    videoName: item[1],
    link: item[3],
    transcript: transcriptMap.get(tempId),
  }
})
fs.writeFileSync('../src/assets/gallery.json', JSON5.stringify(result))
