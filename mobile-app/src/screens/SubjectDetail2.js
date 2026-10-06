import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SubjectDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { subject, profile } = route.params;

  const subjectContent = {
    "Engineering Math I": {
      MCQs: [ "https://drive.google.com/uc?export=download&id=1_-XcZ6Urblry1oWswSUejmvT7pSD_-FQ",
              "https://drive.google.com/uc?export=download&id=11HrHTGF3Fdk3hSAoycK74ausbsTrLYPr",
              "https://drive.google.com/uc?export=download&id=1L4OtQ6B7kkylr8GOSJ2G_T6tQeTIPG1Q" ],
      Notes: ["https://drive.google.com/uc?export=download&id=1iWD_Y2xsT9qAltJphaZlaMIm7ifQnZjl"],
      PYQs:  ["https://drive.google.com/uc?export=download&id=1-6tYF48mAERZm5T9A2_ZwYheyRs5TI3t",
              "https://drive.google.com/uc?export=download&id=1etE4Gq9veeHUjFGR-gsAqQHjGlwX7YYw",
              "https://drive.google.com/uc?export=download&id=1SyphXQBlHUPfE5aNEtMiNbDdL8Cu75Va",
              "https://drive.google.com/uc?export=download&id=1e8XYwSmYXDUen2wlaHvxN49R6eA_3F4C",
              "https://drive.google.com/uc?export=download&id=1qJQz6Zo0exoZANyrOroO1ynXDgGImwED",
              "https://drive.google.com/uc?export=download&id=13VLWwlRyF__pizbcWCSFWukJueGqvv2C"
            ],
      Solutions: ["https://drive.google.com/uc?export=download&id="],
    },
    "Engineering Physics": {
      MCQs: [ "https://drive.google.com/uc?export=download&id=1StzcoD-aGYhZFQKA27xCGph5PAA5EMn8",
              "https://drive.google.com/uc?export=download&id=1wT9w-wQpaPwRpvspNiVpe9TDqpK9hQWt",
              "https://drive.google.com/uc?export=download&id=1y6Y7oWPYWrm_OUg4vPSWZjdeq1CCPwz6",
              "https://drive.google.com/uc?export=download&id=1kKYhGnzIpF3-sSpoALNyy7iKkYG79x2r",
              "https://drive.google.com/uc?export=download&id=1W5uqWlU5nGkrK5U8uZz5N6dKN8gMB-xD",
              "https://drive.google.com/uc?export=19Oa_soA7wROLZM6d17Of7r0FXEYxtRKP",
              "https://drive.google.com/uc?export=download&id=1fEgnTLAoKa_NUOXQ6bLpsRXCNs9nEMGz",
              "https://drive.google.com/uc?export=download&id=1fEgnTLAoKa_NUOXQ6bLpsRXCNs9nEMGz",
              "https://drive.google.com/uc?export=download&id=1SUaSvxMySGkZeirdho_HzfUcZbGgAeze",
              "https://drive.google.com/uc?export=download&id=19f19Nfn_-HAcMe0xDbWIAaeCQqZJLc7S",
              "https://drive.google.com/uc?export=download&id=1UvlUXCAwfwJCYhhEkiE9x1mFIFo50rkQ"
      ],
      Notes: ["https://drive.google.com/uc?export=download&id=1jo6E58VZdK3g-cJmxrs0VTretSUowYQo",
              "https://drive.google.com/uc?export=download&id=1EqcwPnVQTEB-EJjWFo5nNqwWfdIJP4ak",
              "https://drive.google.com/uc?export=download&id=1shwF4ZoYK8sI1GcuTQuKT4azRIndvFXE",
              "https://drive.google.com/uc?export=download&id=1HTRY-OF0y8BXaDHjWzfOGdsJKSz64Ark",
              "https://drive.google.com/uc?export=download&id=1M7dDRNDQ08veK8bBXXQ-4AQYWAkhWxNR",
              "https://drive.google.com/uc?export=download&id=1Kpmi5EsQN4TSv6K_jju3OIl29983RD9z"
      ],
      PYQs: ["https://drive.google.com/uc?export=download&id=1u-ebzmyXnt_gfqWXuAakphNjm8XQPxgs",
             "https://drive.google.com/uc?export=download&id=1U1MIdaBu2a5af1cxYpKQgg7UNJCmRBxw",
             "https://drive.google.com/uc?export=download&id=1rJuUnWAZf1rvi7GPC7LtBXP5HNBvreNV",
             "https://drive.google.com/uc?export=download&id=1N1u4I3t4TX7e5vB4up45yF0-8Y7RGNh-",
             "https://drive.google.com/uc?export=download&id=12dSKEX3GQSgC9qKp9J_ATifrV6gC0jS1",
             "https://drive.google.com/uc?export=download&id=1XxH4F2Fe1UXEStZhE4mqFytD1HeWmJhy",
             "https://drive.google.com/uc?export=download&id=1VUUjsfCPGz84OS-GQozMNGumCtjASCBg",
             "https://drive.google.com/uc?export=download&id=18pGnD1i0AmWlE3X8yLWpwk8q4jGI0wIO",
             "https://drive.google.com/uc?export=download&id=1dFpv22CQPW6tO0tyrxfibLAFViRs5XyP",
             "https://drive.google.com/uc?export=download&id=1U2PW4R0DyeX6q7qeP0K0W_Y-Tn3u1iBg",],
      Solutions: ["https://drive.google.com/uc?export=download&id=1CgNsu7LwUGSN3eTpZkBwDtd7chnmqkc9"],
    },
    "Engineering Graphics": {
      MCQs: [ "https://drive.google.com/uc?export=download&id=1USbt1ObzhMS1GcXEQeGFwBU6jxEmlz06"],
      Notes:[ "https://drive.google.com/uc?export=download&id=1hhWiLT9X0IBAOWwtF8wSDGC0FlxZDsKH",
              "https://drive.google.com/uc?export=download&id=1CTKb95Dn7dmiZ4dwRB3ClxM8CPxe4yD8",
              "https://drive.google.com/uc?export=download&id=1iaJRDZBU1KKw52LeSLHtt3Nvpj1a7pQ-",
              "https://drive.google.com/uc?export=download&id=1_Scb61Y9DV4qaOamevlhaXGpvUL-3MnO",
              "https://drive.google.com/uc?export=download&id=1B0eXMGc2yoYiz-63dDrCAnSYwrm-psEG"],
      PYQs: [ "https://drive.google.com/uc?export=download&id=1GjuOltOgxDQ4c3OLHNPAXdCDOz02NrNj",
              "https://drive.google.com/uc?export=download&id=1Pig4dg0qA0r8vsqxVMyH4VpEUVoSaq_a",
              "https://drive.google.com/uc?export=download&id=1iCZ0sDjhTFgebYymHRJB5oqfe_ChstPY",
              "https://drive.google.com/uc?export=download&id=1GP7xsLjNUkqNV6EfTlnzqwk5d25xCG7o",
              "https://drive.google.com/uc?export=download&id=1LVexz_ZzJCEMkBjx3y5l_c4VdN82FkSN",
              "https://drive.google.com/uc?export=download&id=1Nejg1ELcZ4E46e1lnVJbcXs2xrb-8gGN",
              "https://drive.google.com/uc?export=download&id=145K_WhnB03AgMY97M-PzqSo7mSBDNkoX",
              "https://drive.google.com/uc?export=download&id=1EuyptE4xrT3Cwq6cmhJv4LQIrnVTW73J",
              "https://drive.google.com/uc?export=download&id=1r0w-SwlA8mRckYTN5Ow1GVOL9mPMm2Do",
              "https://drive.google.com/uc?export=download&id=1wrIYHqtUtMGxUx3wW2wePoJE_8JhxEsO",
              
      ],
      Solutions:[ "https://drive.google.com/uc?export=download&id=1djAzOiKcPH4i0VQc2JvTBxjR118Z1tmO",
                  "https://drive.google.com/uc?export=download&id=12Zcm8y5V9WvuQf0zoqSIdYnA0u0_4Z-8",
                  "https://drive.google.com/uc?export=download&id=1mgAiqc7WPE2tdtfW5RMnIOwKU3bBdMCO",
                  "https://drive.google.com/uc?export=download&id=13pmmHkbzGS1xcoCpp-wXahmdDXhvWGwX",
                  "https://drive.google.com/uc?export=download&id=1rlmazENtRpWkkLonkHvHjEbraEslDLLV",
                  "https://drive.google.com/uc?export=download&id=1xIKqaBjeWql7s72SKbixFbmNZ9hdC6Y_",    
                  "https://drive.google.com/uc?export=download&id=1DhswZtkr0aDDq1KjDC4tiG2RD_fff7Y2"],
    },
    "Energy and Environment Eng": {
      MCQs: [ "https://drive.google.com/uc?export=download&id=1dc8RBIoCdotN8J40kjM5V6j46qRKbzeG",
              "https://drive.google.com/uc?export=download&id=1umxFW_g3Z1lKlQeJ82Kx9GbuHSa-Z2eK",
              "https://drive.google.com/uc?export=download&id=1CbyqooYAcnA-tEequa5ObNfy1Pe29hZ8",
              "https://drive.google.com/uc?export=download&id=15yPPbxo_u_jwnkepM3_ztHZRpF93sush",
              "https://drive.google.com/uc?export=download&id=1xbKD9QXWuJmbWdeCya7GU7auQpImOzYq",],
      Notes: ["https://drive.google.com/uc?export=download&id=1pJhZTD0yG6OeUr4EujDvffyXO_QvF3wT",
              "https://drive.google.com/uc?export=download&id=1sbFcTnfSfqvcqWL9sB7us_7Le8LCnYWh",
              "https://drive.google.com/uc?export=download&id=1b_g-5GydLW6HlXF0U9MpemfJGtLXBh6I",
              "https://drive.google.com/uc?export=download&id=1jcRMFADtvycXnCadJ9VkRDimjoxC0iK6",
              "https://drive.google.com/uc?export=download&id=10zp-pWjYKu74oZ5loX2gyC29lh0Jzpua",
              "https://drive.google.com/uc?export=download&id=1D2BNcKLVeyMhn7adu7ropCZxkMK6KnlT"],
      PYQs: [ "https://drive.google.com/uc?export=download&id=1f-dCEv5CJoqizeQjmcrFpE_Z018gK6vf",
              "https://drive.google.com/uc?export=download&id=19ORLOt3D9oWmPMI6Y6SR1YrI_G_MkSVC",
              "https://drive.google.com/uc?export=download&id=1_O4hm6Sv2bbbI4HBVKfDD9vmxTay0dRJ",
              "https://drive.google.com/uc?export=download&id=1T3VGlMF50_Kfrue_NCo1fntjHWdccsYc",
              "https://drive.google.com/uc?export=download&id=1bZ5Fn8aHMdvxP-MUBbQABx6_YdFQuPDT",
              "https://drive.google.com/uc?export=download&id=1EV-tUgCbt75laBLPwTTGu3N5d6F_XvBD",
              "https://drive.google.com/uc?export=download&id=1oqi3tHDEWhQOov3bRvduzyDfaQC91rpV",
              "https://drive.google.com/uc?export=download&id=1bYZtehQhndzy5sGeW76t6AUKPWUjZVXa",],
      Solutions:["https://drive.google.com/uc?export=download&id=1e1AEW7u7y1v8AeWnUU6QB1H-9l11QU6g"],
    },
    "Engineering Mechanics ": {
      MCQs: [ "https://drive.google.com/uc?export=download&id=1yAPuLaOSySM9z8oTeIaPUATYCZoH8ssa",
              "https://drive.google.com/uc?export=download&id=1xu8mLBd6rLKfq1GmwEYWdzR07I5YpMiP"],
      Notes: ["https://drive.google.com/uc?export=download&id=1wxQfgRg-DUyACRZrxm4qRam_cLkZCDEu",
              "https://drive.google.com/uc?export=download&id=1nBKTMYmz_Nk9VF9DCLHBJ6eFWDYxop6l",
              "https://drive.google.com/uc?export=download&id=1XL0ljGDxyZdidhAdRK_g-gTq6G1PAwD5"],
      PYQs: ["https://drive.google.com/uc?export=download&id=1YIwqlW-TaUVQWzSsoKloObxsZI1oVd30",
             "https://drive.google.com/uc?export=download&id=1TYrV6UG1q_ZSHimZmeFIZ4-fekCWFlPu",
             "https://drive.google.com/uc?export=download&id=1i8X8c8ni8a2IAXtOFCt_NnJCJmF5lNmE",
             "https://drive.google.com/uc?export=download&id=1j2KnZUNxwabcFeIlzODGU8b6gtaq9SkJ",
             "https://drive.google.com/uc?export=download&id=1gmJfDVXpI8SPJLzeuKPBWlfBCSLKLJ4S",
             "https://drive.google.com/uc?export=download&id=1BPr3r9lZgx7JKgYwjWrKyd9MGuKUeVi5",
             "https://drive.google.com/uc?export=download&id=1ez-8mH-pGmSebIauez08NCssvY7k3ZVT",
             "https://drive.google.com/uc?export=download&id=1O2x1pxgIwlDkw9YQjENHgGHmu4AEc6-A",
             "https://drive.google.com/uc?export=download&id=1oG9SfMUDe9zDkTlIC5Vh1BOoMWEvoS8z",
             "https://drive.google.com/uc?export=download&id=1Oq6X8YQwAw-BJL2L8F1uRaF0YFcWJA91",
             "https://drive.google.com/uc?export=download&id=1-4kMgwmX1o4hpSa-2EIAXp8403MurZ7l"],
      Solutions:["https://drive.google.com/uc?export=download&id=1f55t-YUc2zxzM8ar6rK6URkMQ5WA-eRN"],
    },

    "C language": {
      MCQs: [ "https://drive.google.com/uc?export=download&id=1A72F0-K6lJsBeAPnnKi0kJINvSU7Y_ETe",
              "https://drive.google.com/uc?export=download&id=1wjHRms57lcJv5eFBLrRn8PN1J7K01sAn",
              "https://drive.google.com/uc?export=download&id=1GXZNhiZNJ9PhCy1LZ0b5tL8w6XDxIxPQ",
              "https://drive.google.com/uc?export=download&id=1Kx8ChweaH_FQOYjw6yPCsR57d9FGB-es",
              "https://drive.google.com/uc?export=download&id=1dUt19-MRGAd2yLJ1J5aP1PiTn0CxtoJt",
              "https://drive.google.com/uc?export=download&id=1-8cTJBPQXb6ue7aj-2s7RUpJdKj5ceTH"],
      Notes: ["https://drive.google.com/uc?export=download&id=1chdWHxUagaJMxvpuxmUKxVf2ugTPCVCm",
              "https://drive.google.com/uc?export=download&id=1JmeOVMWO27PcPJDZMNl05aaH_eBnTawZ",
              "https://drive.google.com/uc?export=download&id=1duEp33ZXpvRoWcpCDcIXRE1FwElKkAkF",
              "https://drive.google.com/uc?export=download&id=1EwwPNJ386-UtdZUU_psAnmvc7RvBckff",
              "https://drive.google.com/uc?export=download&id=1HWGNFpK8w8RhiCwPodes2HuaHQxKjl0B",
              "https://drive.google.com/uc?export=download&id=KM7G_iPy2GxTOBeCNhWOS4CNsrS-1Mfc",
              "https://drive.google.com/uc?export=download&id=h9rEa_xlfsruv1EqH8wSTUWGkSJ1JN29"],
      PYQs: [ "https://drive.google.com/uc?export=download&id=1CYmWhAiT8h6tvGxprEXuIgYSe15d0pQo",
              "https://drive.google.com/uc?export=download&id=1E3aGDMebL1zbmNZQN5V7KKblrXQJb2kG",
              "https://drive.google.com/uc?export=download&id=158iwop-NLJye4YQG1dbDJp9kOZBdY7_A",
              "https://drive.google.com/uc?export=download&id=1P13RteCRQuISIAiCG-h4ltGUEPRuYSNWg",
              "https://drive.google.com/uc?export=download&id=1y_NMYjh6vGG6bhpWjay2RZA4DJchvMBR",
              "https://drive.google.com/uc?export=download&id=1bC_ePaOuJk5oEHZqyeJ8INDamG4tLH2a",
              "https://drive.google.com/uc?export=download&id=1vwpxGGeP1H881G194F5q9KKeGinFncl",
              "https://drive.google.com/uc?export=download&id=1go-dMBYVW7N1YPA38pztBuf-RckuUmbj",
              "https://drive.google.com/uc?export=download&id=1BsvheHyWX8rgyts1jVn79BxBUk9Fh65Gg"],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Basic civil and Mechanical Eng": {
      MCQs: [ "https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },"Engineering Math II": {
      MCQs:["https://drive.google.com/uc?export=download&id=1wd8M63S1wdUV50pzlOfr_YjVIe9xqWYG",
            "https://drive.google.com/uc?export=download&id=1nwmqzD28wAxtaWBAuGstg1Vm8MThmaro",
            "https://drive.google.com/uc?export=download&id=1ehT-0OVo3NxRqPN9sBTdg8PIzTb5Wtbi",
            "https://drive.google.com/uc?export=download&id=1o42FKR1s0Bo9E8z-uubtBvpgjKL6rIUZ",
            "https://drive.google.com/uc?export=download&id=1bfU-GiVNCtrQQosBDlQKs1nvaoLLQhWK",
            "https://drive.google.com/uc?export=download&id=1e2IQoqSBPd6UkunidPWjM7lpfursGeug",
            "https://drive.google.com/uc?export=download&id=17y4gzI_3UR6iLMosvObU-ILcUiShHTun",
      ],
      Notes: ["https://drive.google.com/uc?export=download&id=1E8iKUTZlJOwUCeGzSGCi0ylP47ZRYnZ2",
              "https://drive.google.com/uc?export=download&id=1CsLIjHTDxebH2xkRHbkoMBB56u3NWNUV",
              "https://drive.google.com/uc?export=download&id=1IGmxgV9kyufnWWEwkirSMk_VFGKxaspG",
              "https://drive.google.com/uc?export=download&id=1b4QLQ6iwWwpcNVkqQ_6G9G45xtH-iBxz",
              "https://drive.google.com/uc?export=download&id=1E3TIVpZMwak80IeswxVSCEYYm35S2Mxo",
              "https://drive.google.com/uc?export=download&id=1NFDq4GBxLMDQD_Xwy0rt8j3Aq0kT8h4F",
      ],
      PYQs:  ["https://drive.google.com/uc?export=download&id=10mR5ji1s5-q26TzlbTq5Yf1fBM9LqHoC",
              "https://drive.google.com/uc?export=download&id=1ycFwbrejhVFgSuk0C-kHoQcvndPFKvWL",
              "https://drive.google.com/uc?export=download&id=1J_S39O5fl5DUP0fHQyLastoqp190fGoF",
              "https://drive.google.com/uc?export=download&id=1U0RsEgV9bWQXlyLOf-izKejj65xBdsae",
              "https://drive.google.com/uc?export=download&id=1eFD3wbT2e7M86WrCr-Z86NQkBd1p_muv",
              "https://drive.google.com/uc?export=download&id=1yuUUtfiYy_1Sr3ii61YefFB2J-CAfp2A",
              "https://drive.google.com/uc?export=download&id=1gzmhgpfq14x5nnUnH8tY1N_og8JEt6Yo",
              "https://drive.google.com/uc?export=download&id=1Vo4xZEm6nqajjWj9hX2T1Nw7a9AY14pp",
              "https://drive.google.com/uc?export=download&id=1FjDpoCL1VzUQQ2y76MEFE9PAahLtgfKk",
              "https://drive.google.com/uc?export=download&id=1WozDhFZE6VJi9mzWOwCD3K4r8SG_5BK_",
              "https://drive.google.com/uc?export=download&id=1tK5SvzIebczhGJhZnbkVkq5STdsApptV",
              "https://drive.google.com/uc?export=download&id=1qYcU5HjjCt6m28IwkK3i86yjrbQloB-5",],
      Solutions:["https://drive.google.com/uc?export=1wmkPFAfwLXaMDD1XSkOjticJnKHTfya5",
        "https://drive.google.com/uc?export=download&id=1sLEssDCGYbNBjqwIatjykkMjmyQSGLkp",
        "https://drive.google.com/uc?export=download&id=1qs-qrxSk0C7Yz-y8daIbKBGsk5BZWnCX",
        "https://drive.google.com/uc?export=download&id=1bBnC1bi2LvRwD2MsO-lWs7Rqz34HTe9S",
        "https://drive.google.com/uc?export=download&id=1YUAetP9kcGisnHhT9IM5NAS8NxF8D19L",
        "https://drive.google.com/uc?export=download&id=155_sI0BUbpnQG0aS6Xqnf4MsAlcpsvKF"],
    },
    "Engineering Chemistry": {
        MCQs:["https://drive.google.com/uc?export=download&id=1gAJnoq4aaWFVGBQeyzDLr4GyUgMAtsJE",
              "https://drive.google.com/uc?export=download&id=1JNd5VypYPKtKWG6JoEGfd7T3fVJ0roKA",
              "https://drive.google.com/uc?export=download&id=13rw3xAXyO9XhBpvW_zhbWV1uI4Y-4rP9",
              "https://drive.google.com/uc?export=download&id=1qreOgTDLw6Klbv5-DCiBd_DTJAiDVZfJ",
              "https://drive.google.com/uc?export=download&id=15RtidF7pEyGD5W00U9ntYWYLgHrLNGf6",
              "https://drive.google.com/uc?export=download&id=1oVyEKy9Oq_a0hjnfvHgIVBESngtIT8Yl"],
      Notes: ["https://drive.google.com/uc?export=download&id=1NP0fVo_S5v9GTBAsjlLqsA34IuAbIPms",
              "https://drive.google.com/uc?export=download&id=1McbNiyVXkIDS9YI_wync5BRXBNApRSYi",
              "https://drive.google.com/uc?export=download&id=1VW8aY2wdWwKxk92dvsn2jXUx_wxVnkWM",
              "https://drive.google.com/uc?export=download&id=1dU4q2imggShgpdizsJcALyma-siFtCJA",
              "https://drive.google.com/uc?export=download&id=1SP1z7wHN4hmwvCpVyREkLk2EVGGG2Drg"],
      PYQs:  ["https://drive.google.com/uc?export=download&id=19pejkVZ4oHrM9D0xI-DKvobGU1CrQzx6",
              "https://drive.google.com/uc?export=download&id=1uw3PNsozyyIJ72EBuCKE_o2e6ldhsTJU",
              "https://drive.google.com/uc?export=download&id=1pDCnQ-3K8Yl2ty-zyxtwP_KgRM7WHOuq",
              "https://drive.google.com/uc?export=download&id=1odWaPq8XnVgRwnMBrzCoPIPo56jfdhcb",
              "https://drive.google.com/uc?export=download&id=1QIt0wqbQpGh-lUJuwmHg-Km_e_iJdCwa",
              "https://drive.google.com/uc?export=download&id=1RDhiAdqij1t9ulqiZC7F7MNpZMLJ1IOR",
              "https://drive.google.com/uc?export=download&id=1XK0sHgq83Btn91wOwgm9M6dmEaARIFx4",
              "https://drive.google.com/uc?export=download&id=1iLdpME3De1ifJk7yg1_YfHsvx0cbZBL9",
              "https://drive.google.com/uc?export=download&id=1YLE2QxcaGmdDvGcEVpfVP96TW7ZiZTex",
              "https://drive.google.com/uc?export=download&id=1ek4p0jTxXntMe41ccbst8LCwTLcYLI--",
              "https://drive.google.com/uc?export=download&id=1dtyZy6koSh-2VI4VnjD1g4a6hW1DfoFf"],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Communication Skills": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes:["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Engineering Mathematics III": {
      MCQs:  ["https://drive.google.com/uc?export=download&id=1aXVbxtEwKV8le32SQSjwBN-1KoGaOqFw",
              "https://drive.google.com/uc?export=download&id=13115FqcT1dBhmNE0fN0S7EpGxXkdAAJP",
              "https://drive.google.com/uc?export=download&id=1cct_R3bTrfwD3ZUdjlEurS7B5rL7aA5P",
              "https://drive.google.com/uc?export=download&id=1vD77GuKk--NOyPnU-NhkL12OjtgD7LSL",
              "https://drive.google.com/uc?export=download&id=1HHBySIzxhEZpT4HMekHJMF76uGX5YCft"],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs:  ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Discrete Mathematics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Data Structures": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes:["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Computer Archit & Organization": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes:["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "OOP C++": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes:["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "OOP Java": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes:["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Design & Analysis of Algor": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Operating Systems": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Basics Human Rights": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Probability & Statistics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "DLD & Microprocessor": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Database Systems": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Theory of Computation": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Software Engineering": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Human Computer Interaction": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Numerical Methods": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Economics & Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Business Communication": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Compiler Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Computer Networks": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Machine Learning": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Geographic Information Sys": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Internet of Things": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Embedded Systems": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Development Engineering": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Employability & Skill Develo": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Consumer Behavior":  {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Artificial Intelligence": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Cloud Computing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Bioinformatics Distributed Sys": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Big Data Analytics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Cryptography & Network Security": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Business Intelligence": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Blockchain Technology": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Virtual Reality": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Deep Learning": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Design Thinking": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
      "CN & CC": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Machine Learning": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Economics & Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Business Communication": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Knowledge Reasoning & AI Ethics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Advanced Database System": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Soft Computing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Sensors & Robotics Techn": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Advanced Java": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Data Mining & Warehousing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Digital Communi & Info Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Software Engin & Testing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },  
    "Advanced Machine Learning": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Recommender Sys": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Industry 4.0 & Automation": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Web Development": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Agile Methodology": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Augmented Reality": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Development Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Machine Draw & Comput-aided Draft": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Thermodynamics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Fluid Mechanics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Materials Science & Metallurgy": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Physics of Eng Materials": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Applied Chemistry": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Interpersonal Skill": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Theory of Machines & MechanismsI": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Strength of Materials": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Manufacturing ProcessesI": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Applied Thermodynamics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Numerical Methods in Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Biology for Engineers": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Renewable Energy Sources": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Machine DesignI": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Manufact ProcesseII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Theory of Machines & MechanismsII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Heat Transfer": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Metrology & Quality Control": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Sustainable Development": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Non-Conventional Machining": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "echanical Measurements": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Manufacturing ProcessesIII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "IC Engines & Refriger & Air-conditi": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Machine DesignII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Fluid Machinery": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Design of Experiments": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Wind Energ": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Engineering Economics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Entrepren Development": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Quantit Techni in Proj Manage": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Development Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Manufact Automation": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Steam & Gas Turbines": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Industrial Product Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Intellectual Property Rights": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Additive Manufactu Proces": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Mechatronics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Industrial Eng & Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "CAD/CAM": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Power Plant Techn": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Finite Element Analysis": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Mechanical Vibrations": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Surface Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Human Resource Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Design of Heat Exchangers": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Design of Heat Exchangers": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Building Constr & Draw": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Hydraulics-I": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Surveying": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Building Plan & Draw": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Environmental Engin": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Structural MechanicsI": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Water Resources Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "HydraulicsII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Eng Geology": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Design of Steel Struct": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Geotechnical Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Struct MechanicsII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Concrete Techn": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Project Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Advanced Environmental Engg": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Applied Geology": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Hydraulic Eng Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Advanced Water Resources": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Geomatics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Town & Urban Plan": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Material Testing & Eval": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Constr Economics & Finance": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Design of RC Struct": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Foundation Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Transportation Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Industrial Waste Treatment": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Managerial Techniques": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Open Channel Flow": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Water Power Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Ground Improve Techniq": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Structural Audit": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Intelligent Transportation Sys": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Plastic Analysis of Struct": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Numerical Methods in Civil Engg": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Eng Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Environmental Impact Assessment": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Business Communi & Presenta Skills": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Composite Materials": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Experimental Stress Analysis": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Operation Research": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
      "Application of Remote Sensing and Geog Info Syst": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Civionics:Instrumentation & Sensor Techno for Civil Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Development Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electrical Machines-I": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electrical & Electronics Measure": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Eng Material Science": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Network Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Power System": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electrical MachineII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Analog & Digital Electronics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electromagnetic Field Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Signals & System": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Advance Renewable Energy Sources": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electronic Devices & Circuits": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Power System Analysis": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Microprocessor & Microcontroller": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Power Electronics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },

    "HVDC": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Power Quality Issues": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Industrial Automation": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Embedded System": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electrical Safety": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Condition Monitoring of Electric Apparatus": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Switchgear Protection": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Electrical Machine Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Control System Eng": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Flexible AC Transmission Sys": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Smart Grid Techno": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Modeling": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Modeling Simulation & Control of Electric Drives": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "E-waste Management": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Sensor Technology": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Lightning Interaction with Power Sys": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Electronic Devices & Circuits": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Digital Electronics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Innovation & Entrepr": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Universal Human ValuesII": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Signals & Systems": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    

    "Microprocessors": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
     "Network Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "PCB Designing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Patents & IPR": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Constitution of India": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Digital Signal Processing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Electromagnetic Wave Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Analog Communication": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Fiber Optic Communic": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Control System": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Advanced Mobile Communi": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Analog Circuits": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Digital Communication": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Digital Audio Proces": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Digital Image Process": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Intro to Adaptive Signal Processing": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Microwave Theory & Techni": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "RF Circuit Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Wireless Sensor Networks": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Bsic Concepts  Film & Video Editi": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Computer Networks": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Antennas & Wave Propagation": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Biomedical Electronics": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Embedded Sys Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Intro to Inform Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Intro to MEMS": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Satellite Communication": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Intro to Coding Theory": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "Research Methodology": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    
    "VLSI Design": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "DSA Using Java Programming": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "UAV in Eng Applications": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
    "Data Compression & Encrypt": {
      MCQs: ["https://drive.google.com/uc?export=download&id="],
      Notes: ["https://drive.google.com/uc?export=download&id="],
      PYQs: ["https://drive.google.com/uc?export=download&id="],
      Solutions:["https://drive.google.com/uc?export=download&id="],
    },
  };

  const selectedSubject = subjectContent[subject];

  const openPDF = (type) => {
    const value = selectedSubject?.[type];

    if (Array.isArray(value)) {
      navigation.navigate('PDFList', {
        title: `${type} - ${subject}`,
        viewUrls: value.map((raw) => `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(raw)}`),
        downloadUrls: value,
      });
    } else if (typeof value === 'string') {
      const viewUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(value)}`;
      navigation.navigate('PDFViewer', { url: viewUrl });
    } else {
      alert(`${type} not available for ${subject}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ✅ Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <Text style={styles.backText}></Text>
      </TouchableOpacity>

      <Text style={styles.title}>{subject}</Text>
      <Text style={styles.subtitle}>
        {profile?.branch || 'N/A'} - Year {profile?.year || 'N/A'} - Semester {profile?.semester || 'N/A'}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={() => openPDF('MCQs')}>
        <Text style={styles.btnText}>📘 MCQs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => openPDF('Notes')}>
        <Text style={styles.btnText}>📝 Notes & Books</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => openPDF('PYQs')}>
        <Text style={styles.btnText}>📄 PYQs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => openPDF('Solutions')}>
        <Text style={styles.btnText}>✅ PYQ Solutions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flexGrow: 1,
    padding: 20,
    paddingTop: 40, // enough space to show back button clearly
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 15,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
