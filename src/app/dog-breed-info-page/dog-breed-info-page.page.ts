import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-dog-breed-info-page',
  templateUrl: './dog-breed-info-page.page.html',
  styleUrls: ['./dog-breed-info-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DogBreedInfoPagePage implements OnInit {

  dog:any = [];
  allBreeds: any = [];
  //Stores images for each dog breed read in from API
  images: string[] = [
    'https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8',
    'https://www.petsa2b.co.uk/wp-content/uploads/2022/03/norwegianelkhound.jpg',
    'https://cdn.britannica.com/83/236683-050-84785C8B/Boston-Terrier-dog.jpg',
    'https://media.graphassets.com/resize=height:404,width:1280/output=format:webp/qJHGxvmuQqChKnu2HAfB?width=1280',
    'https://pbs.twimg.com/profile_images/1571918837507031040/ykHlZM_e_400x400.jpg',
    'https://dogtime.com/wp-content/uploads/sites/12/2023/09/GettyImages-1418252093-e1695215819445.jpg?w=1024',
    'https://www.rover.com/blog/wp-content/uploads/iStock-519252803-960x540.jpg',
    'https://www.dogster.com/wp-content/uploads/2024/03/blue-merle-border-collie-dog-posing-in-an-urban-setting_Koen-Adriaenssen_Shutterstock.jpg',
    'https://www.prodograw.com/wp-content/uploads/2023/04/cardigan-welsh-corgi.jpg', 
    'https://www.thesprucepets.com/thmb/DrbC35E5L8GxriqBs5L7YjLIYHM=/1280x0/filters:no_upscale():strip_icc()/great-dane-129741288-resized-56a26a905f9b58b7d0c9fe74.jpg',
    'https://www.dogster.com/wp-content/uploads/2011/02/scottish-deerhound-dog_Antonia-Gros-Shutterstock.jpg',
    'https://worldanimalfoundation.org/wp-content/uploads/2023/01/Norwegian-Buhund-Terrier-Facts-review.jpg',
    'https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/QjY1uOmGQcmeZtXA1wih?width=1280',
    'https://cdn.britannica.com/54/236454-050-B406A11E/Bichon-frise-dog.jpg',
    'https://images.saymedia-content.com/.image/t_share/MjAxNTIwOTk0ODM2NTU1Mzg1/italian-greyhound-guide.jpg',
    'https://urbanpawsuk.com/wp-content/uploads/2021/06/Raja-lie-down.jpg',
    'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07200501/Basset-Hound-standing-in-the-garden.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2021/05/19123655/GettyImages-1483841799-923x615.jpg',
    'https://t4.ftcdn.net/jpg/06/76/83/79/360_F_676837951_x5zlLJRFYo1KNvetrIm8rAbXtWv1Motx.jpg',
    'https://www.guildinsurance.com.au/images/librariesprovider3/breed-images/500x500/ibizan-hound-(1)-(1).jpg?sfvrsn=b5c670b_2',
    'https://www.dogster.com/wp-content/uploads/2024/02/shutterstock_1431380615.jpg',
    'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-167081841-e1691849949983.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2021/06/02113056/Bullmastiff-FeaturedImage-1024x615.jpg ',
    'https://www.dailypaws.com/thmb/L2cjeUzfc0Z8v5XS1JNqEPzOHAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mastiff-standing-grass-279010634-2000-5f5294cf48c24351aa8a55748e29cb4b.jpg',
    'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Tibetan-Mastiff.jpg',
    'https://www.thesprucepets.com/thmb/dmGY-15XXfc9J05zbe1P-UMqngo=/2000x0/filters:no_upscale():strip_icc()/GettyImages-685105623-ad4c46661abf4a8bb2f4687b52d1afbb.jpg',
    'https://image.petmd.com/files/styles/863x625/public/2023-11/greater-swiss-mountain-dog.jpg',
    'https://www.dogster.com/wp-content/uploads/2024/02/Caucasian-Shepherd_DragoNika_Shutterstock.jpeg',
    'https://www.dogster.com/wp-content/uploads/2024/01/miniature-pinscher-standing-on-grass_Sevostyanova-Tatyana_Shutterstock.jpeg',
    'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/09/15114419/German-Shorthaired-Pointer-puppy-laying-down-in-the-grass.jpg',
    'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/GettyImages-1307362550_0.jpg?h=9b158e7f&itok=pQBWSOVy',
    'https://i.pinimg.com/736x/ee/72/0d/ee720d3ca6549866b4337c5d3f7f6934.jpg',
    'https://img1.wsimg.com/isteam/ip/61f28504-764c-4d88-a692-4c9961fbb741/20211111133451_IMG_0868.jpg',
    'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Poodle%20%28Standard%291.jpg?h=dfc28711&itok=EmD20zN0',
    'https://www.petlandflorida.com/wp-content/uploads/2021/01/Petland_Florida_Toy_Poodle.jpg',
    'https://i0.wp.com/alaskadogworks.com/wp-content/uploads/2022/11/chessy.jpeg?fit=2000%2C1333&ssl=1',
    'https://www.guildinsurance.com.au/images/librariesprovider3/breed-images/500x500/curly-retriever-(1)-(1).jpg?sfvrsn=d59b640b_2',
    'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Flat-Coated-Retriever.jpg',
    'https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg',
    'https://www.dogster.com/wp-content/uploads/2024/03/Autumn-Dog-Rhodesian-Ridgeback_dezy_Shutterstock.jpg',
    'https://www.akc.org/wp-content/uploads/2017/11/Giant-Schnauzer-MP.jpg',
    'https://www.burgesspetcare.com/wp-content/uploads/2024/01/shutterstock_478281727-scaled-1.jpg',
    'https://breed-assets.wisdompanel.com/dog/segugio-italiano/Segugio_Italiano2.jpg',
    'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2024/03/BHKENT-1.jpg',
    'https://www.prodograw.com/wp-content/uploads/2023/04/gordon-setter.jpg',
    'https://homesteadontherange.com/wp-content/uploads/2021/04/b5d5e-cf5d7-isetter.jpg',
    'https://static.wixstatic.com/media/db516d_04a01c8775bb44868155eda3170ee42e~mv2.jpg/v1/fill/w_640,h_422,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/db516d_04a01c8775bb44868155eda3170ee42e~mv2.jpg',
    'https://images.ctfassets.net/m5ehn3s5t7ec/wp-image-198120/29cb08be2207de3ed8becbd110cc95fb/Shetland_Sheepdog.jpg',
    'https://www.akc.org/wp-content/uploads/2017/11/Cavalier-King-Charles-Spaniel-standing-in-the-grass.jpg',
    'https://www.akc.org/wp-content/uploads/2017/11/Brittany-1.jpg',
    'https://d.newsweek.com/en/full/2120790/english-cocker-spaniel.jpg?w=1200&f=01ee0c0f3cd0ebf756abec84da054493',
    'https://www.petfinder.com/sites/default/files/images/content/irish-water-spaniel-detail-scaled.jpg',
    'https://apupabove.com/cdn/shop/articles/Japanese_Chin_1200x1200.webp?v=1702658730',
    'https://www.thesprucepets.com/thmb/rcavvjgPDWXssnQkldRqGjx1GZ4=/3000x0/filters:no_upscale():strip_icc()/sussexspaniel.ChrisMcGrath-56a2689a3df78cf772753e5f.jpg',
    'https://media.graphassets.com/resize=height:404,width:1280/output=format:webp/3NuHqWPUTMepxj8cv0xf?width=1280',
    'https://www.dailypaws.com/thmb/kryqP1qNW42yYL2WlrNwzKiZR8o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/japanese-spitz-snow-1611011746-2000-397a8c9048a64d4db49d514073a2c3a0.jpg',
    'https://www.dailypaws.com/thmb/18tqKGvNa5h5STatvpTEcaX6OXY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/english-springer-spaniel-lying-yellow-ball-248143383-2000-81a2a97ad747423cb4c15f21b3f661e6.jpg',
    'https://breed-assets.wisdompanel.com/dog/american-pit-bull-terrier/American_Pit_Bull_Terrier3.jpg',
    'https://i.pinimg.com/originals/e6/c5/e8/e6c5e8ace30c2a0c11e07b018ab2e523.png',
    'https://media-be.chewy.com/wp-content/uploads/2021/06/03165025/Bedlington-Terrier-FeaturedImage-1024x615.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2021/06/22174518/border-terrier-happy-1024x615.jpg',
    'https://moderndogmagazine.com/wp-content/uploads/2009/11/bs-72679387_Bigandt_Photography.jpg',
    'https://eukanuba.eu/fileadmin/_processed_/9/1/csm_Dandie_Dinmont_Terrier_L_a678f104cd.jpg',
    'https://www.dailypaws.com/thmb/FV6eTEM4yXGPB7g4XujXGEhRzEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smooth-fox-terrier-standing-in-park-371253264-860111531e844201b3c8efffbd271287.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2021/07/06160323/IrishTerrier-FeaturedImage-1024x615.jpg',
    'https://www.dailypaws.com/thmb/PgvydOxLmlyOI27caI6SWmVMB9U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kerry-blue-terrier_175580093-2000-89585eb7ac284dad8349943b7db67b96.jpg',
    'https://images.articlesfactory.com/750x0/e2bf9a63-af53-4674-b5b4-37d177825a03.webp',
    'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2018/04/dgoy1.jpg',
    'https://image.petmd.com/files/styles/863x625/public/2024-01/norwich-terrier.jpg',
    'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2023-01/Hero%20Patterdale%20Terrier%202.jpg?itok=wfJWKjbd',
    'https://warsawdog.com/wp-content/uploads/2020/07/jack-russel-terrier-scaled.jpg',
    'https://media.graphassets.com/resize=height:404,width:1280/output=format:webp/au7PH0SPSVGNgsvXFAIq?width=1280',
    'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/SealinghamTerrier-tile.jpg',
    'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Australian-Silky-Terrier-tile.jpg',
    'https://dogsqueensland.org.au/media/img/BrowseAllBreed/Tibetan-Terrier.jpg',
    'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/English-Toy-Terrier-Black-Tan.jpg',
    'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Welsh%20Terrier2%20%281%29.jpg?h=b5274c23&itok=YOXL-GBo',
    'https://cdn.britannica.com/15/236915-050-055930EB/West-Highland-white-terrier-dog.jpg',
    'https://www.thesprucepets.com/thmb/2g6UxOrSCW9ZvqO7MZRDZAtJAEw=/1500x0/filters:no_upscale():strip_icc()/GettyImages-466537013-1115343d979f49658c4874b6e72b2d1e.jpg',
    'https://www.yorkshire.com/wp-content/uploads/2022/10/yorkshire-terrier-on-grass.jpg',
    'https://betterpet.com/wp-content/uploads/2023/03/spanish-water-dog-outside.jpeg',
    'https://www.akc.org/wp-content/uploads/2017/11/Irish-Wolfhound-standing-in-a-field.jpg'
  ]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDogBreeds(); 
  }

  //Fetches the API .json
  getDogBreeds()
  {
    let url = "https://dog.ceo/api/breeds/list/all";

    //Uses local allBreeds within function to assign to array
    //Loops through API to assign elements to array
    this.http.get<any>(url).subscribe(
        (data: any) => {
          const dog = data.message;

          this.allBreeds = [];
          for (const breed in dog)
            {
             //Iterate over each breed in the array and capitalize it
              for (const subBreed of dog[breed]) 
              {
               //Reads in each word in the API and add it to allBreeds array, calling the capitaliseWords() function
               this.allBreeds.push(this.capitaliseWords(subBreed));
              }
            }
            //Prints to console
            console.log(this.allBreeds);
        }
    );
  }

  //Swaps out the original breed element with a capitalised version
  capitaliseWords(words: string): string {
    //Capitalize the first letter of each breed
    //'\b' finds the end of the word, '\w' reads the next beginning character, /g is a complete search fo the array
    return words.replace(/\b\w/g, (char) => char.toUpperCase());
  }

}
