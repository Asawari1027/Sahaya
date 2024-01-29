
import React from 'react';
import Navbar from './Navbar';
// import { Router , Route , Switch } from 'react-router-dom';
// import Aboutus from './aboutus';
// import App2 from './App2';
// import Navbarpage from './Navbarpage';
// import Navbar from './Navbar.jsx';
// import {BrowerRoute,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <!-- first part start --> */}

        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div class="col-lg-6 px-2">
            <h1 class="display-6 fst-italic">Sahaya -"LifeLine Blood Services." </h1>
            <p class="lead my-3">We have built an institution that matches high standards of healthcare delivery across the world, where care is provided to patients at an affordable cost."
              Dr. Naresh Trehan
              Chairman & Managing Director, Sahaya</p>

          </div>
        </div>

        {/* <!-- starting end  --> */}



        {/* <!-- doctor start  --> */}
        <div class="row g-5">
          <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom" />
            <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Contact Nearest Blood Bank...</a></p>

          </div>

          {/* <!--  --> */}
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-6">
            <div class="card" style="width: 18rem;">
              <img src="data:image/jpeg;base64,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"
                class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lokmanya Tssia Blood Bank</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <a href="#" class="btn btn-success">    <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i> Phone no:</label>935468925</a>
                <hr />
                <a href="#" class="btn btn-primary">Send Enquiry</a>
              </div>
            </div>

            {/* <!--  --> */}
            <div class="card" style="width: 18rem;">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFhUXFxcXFxgYFxcVFxgYFxcXGBUXFRcYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL8BBwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABGEAACAQIEAwUGAgcGBQMFAAABAhEAAwQSITEFQVEGImFxgRMykaGxwQdCFCMzYnLR8FKCkqKy4RUkQ3Pxs8LSJTREY5P/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADMRAAEDAgQDCAEEAgMBAAAAAAEAAhEDIQQSMUFRYaEFEyJxgZGx8MEUMuHxctEjUsJC/9oADAMBAAIRAxEAPwA7bFWFFQWjU+cAakDz0q1SmUVe4Ue+BOmun8qEjGJ/anyBb6VtaxjT3LbSNpIH0k/KqVpuvWVYaiaUeJYL2d0xoCZEeIpn4ffZllrVwHpAifAkihfaEuFBZFUlisKx7qxIzEbkjp08aE5Q7MAJ/C5vatLvMKcziMtx56RE6c9kNtWSIc+gGp9elWrWNUDUMPOKE3MWSurCdQAOsCPp4UM4hjTrrqTA/r4mmCXXK5vZOHqEZw4hnD/sdzyCa14wnLWtX4mZ0AE9daU8JcBbLqQIk9SdYooisx0mB0+87VLr0oiEVuYogS95x4Ig+UAtNaAq21m8/wDGSB8Hb7UNxdwCBz35jXmZojw7j2YBShZ9hECfUmKp07KgrdpLv5bNtPMz9AKlGFvne8F/gUD5ma8OKvcrSL/HdX6W81ZmxB/PbX+FHf8A1ZaIUqh2U9lr/wAFzNL3brb6Z2AM+A0qbDcKtAKcgmBJjw51ZwKuAQ7ZjO8ZdIEaSY+NS5e6PL7UJEGCqJK0LW15qPhUL8Usj86/H+dVsFhA1tCUUkqpkgEzA5mrlvCdI9BWkYbi5CSFpb4iHMIjt5KY+MRVtMPfb/o5f4mX6AzXtizBGpowxKkGJ0jfXWk1aYZuqzgIQeE3iNXtr5SY89K2t9nZ969P8Kx9SaJXmlSf8XrVi0dJ5aR4UsQqbUkoZ/wCyoLMXYAEmSOXkBQ+2kAeVMeM/Zv/AAt9DQAjT0qI3KpiRpZH76fJWP2q5c901UxQ71gfv/S09T4i4MpE6gajn12oxqllMeGWEUdFH0qatU2FbUCcsrKje7FbAzUlUHAmFtWVlZUVrKysrKii+f8AhvaNbpbLbxNxFOrKFGnUKCs/WnrgPD8Nfti7aVrgmDMKynmrgjMp8DSpwDErhcJaUJmJAJK6AlvGDJ1ph7PcSy4tiiGfZw4kQwBEaDUlSY/vGs3fTJItfn0F0yrQJEB0H0/IITbhOGW1P7D/ABd75nSrpsMty3kCBCO+MomfCpsDimee7EeNXQT0plKoyo3My49fyswo1KZIe6Tzj8WQ+9inRbzELCDMu40Ek5teg5Vzk9qkxNy9aDCbpBtkzAZQe74yJHpXUkIdTpoZBB+BBrgXbThNrDY0C1ccI7F1lHXJBEhXIysAdiDppPIljismKpPflMyBMjjMi++hPz5QcQ4vct3FVhEAkidNfdIjfl8ax8ZMNG8x5z/IUN4hh7l68HdtDrEEACdB4f70xraw2XWSVEwJOsbeZgfCiBI0HULdh6FNlMMDoAsLE/AO6tcFs+MkmTrrrzI5U14axA3+dLK30sqqBArtqxLS0nko2MfY0S4fxHMN9dtaCnXa8wFoq4Z9MTqOI/mPtlcxyCCDr9+mtLd9FUyjleeUzAPIjp5CjHEb4KxvPw/3oPYQK0H3TuDy8qF1dodlKoUHFsovxHt/YwgRWtM91lViBAVZ0nMd5g7CjnZztdh8actpstyAfZsApjqpmD9a4zxHGPjbwyWfd7iRqMgOmcnzY6bTGtSPwLE4V0xFpwHRlYRPdYHTzHKOdPdiod4oQNpFzZErvIY52k6z4a90VqCO6J35dd68t2XzKzjK2UFgOrKJHxmtlTY9JqVP3FKUvA8ODaSZ91OnNaIpZA1A5c5PKdKqcHRRYtn2kdxSfhQzGdpcKhgXGPKQJpznAnVWWGJhGrtsSsRrW2LvQ+WJgSOu1LVrtfaXXLB/rqaj4p23w9ts5DOQvuIAWOm0E7Uup4ha6W9shMGExSsrbwdR9vP/AGq1hsZy5TpSB2c7fYe/d9kbb2szaHRlUGdGjVR40/phEWMzeO4ApZgFA1jpst8dih7J/Ij1On3oXd2Pkam4s65QFPSRrsWFQXvdPkarZMbO5VfFftLPm5+CEfevXUwZiDp9p8OVZif21sfu3D/oH3qa4NVHVlHxIpgVFMmcda19oIry4wjatp8PpQWTSCqxT+tanVoHOvQ/h9KxXJ5UIAQtp5bhYtyeRqSsqNGmdqtF5qSsrRmjU1lRQkBfOeO7QBsPaW2XBiZPckEaAxvyk+FXvw9xj/ptpQwKsWzgbZchOx/LIGtUbPA/+Vt2rqgXEEHwMnYjwirnAsF+jHOk5gGzEMQYAnTkYI2Iigo4uk2kaZHHmDzKz4zCVnHvqZuNALHhA5+06LvFtYUhdND9N6Ve0HbnD4UG29+b4OqqucqDtn0hfXWhnZ/8SbbqLb2rhuQAoSGzsd1G0GdqHYv8N/02++KKNhxeOZrd3vOpjVgEbckbEiKtr2EeCDC1Pw1ejHftLSRvfqJmPVODdr8Lbwr4n2gKgtA2Zm1YIo6mR5b0vdleGYjHWHu4pfZI7F7K5QSJ/OhOoQ66HffaKK8I/DbB2SrNnvMmoFwjJP8A2wII85pxnpROaHCFGVHU3BzbEaLlHaDs17Mm0D3veVtswGx8xsQPuKSreAu27oVkkSdR5a/L6V3fj/DVv24I7y6qdiD4Hx/lXN8RKk5hIGkjl/GOR+VZatR1K2xWqjTbWuP3bjj5cfLXkvMVwmbttwZ72ZtdCI0EDzBqXiKBTmXbZh16H0rxbo3BkculR2le62RRM8uUc58KyCTotoeGmXabjlv/ABzuqHFcU6rmVcw5jb4HlVnsxYbE3GAEIFcNMhleO6Oh3mQeVG+GdngQyXLjZlbKwAERAKnUGQVI6c6IHCrhLJS3K5iRmPvDNpm85IroYbCOeRmGqwYnENpEgHTruCPRA+H9lRdDKl1rN1GytCg5iPzGCNTzjmJ50WwHY+7auWGbFG6FJN0MqqWjVcpExBjelOxxu7gnKurunOJJBG5B6GnDgPaT2y5wpCGVBOhOsEgE7cqKgym9thfr680upUex9zDeOyYMSAHO+w316j7UOx2PSxZa7cMIgJJiecaAbmase2DMWBmQPkSD9qH8cwhfCkT3bhZTHKDI+MGpiKoo03VHA2+/eSGmwVqwYHC+/wA+3zA3XLON/iQ91BYtD2dsAAk6s0deg8KFYPj4JGaqHaDhhWJ3U+z0EaLIBbqdtedCxgysHX4VYqNe0FFUDmvIOyb8dxHQajTX+WlBb3GSWGuoOh6UKxN9vGrXDOEvd7w2nepmDRJQwXGAE98B45IhsoK89BPnXVey/Bow1n2hbMASO9MKWY2xtyQqPSkXgXYy22GS5m/W8wRo0Nt4Gun4TBsiIse6hG/OdPlRNEEuG6Cq6WgETCqcXw4QKQdSygieWZYqK7tVzjKEohgSGSf8QP2qndOnqPqKiFoVW7+3Twt3Pm1v+VW4lrY/fX5EVVOuI8rY+bH/AONXLP7W3/F9ATTdkvdG3T6ivcnhWxOorYmlJ8lRC2dNtK9VdenhUgavaiklD+KXgoALATO5iazh7RM6zrNWL94AgET8NPjWlrEo22o5xBA+FC4xdILJfmlZj3GXXasrZ76TDQPOPvWVTmzuhfTLzIK5JwfiFjGIXuBbbMzwub+xlDQ0CdMp9aF8exyBWGHEjOLOYiZzIxcqPLKB5mlp7/8Ay5AUEpdzc9BcQrO+4ZU+VdA/DDs97ZExN0dy3duOoP57kKqnyXKT5kdDQ/pxNlqFeIDhMPHsDm6iBOyYvw87IDCIL11ZvuNj/wBMH8o/ePM+nm8hqq3X0mo76FgGUkGnMpBjQ0KV8TUr1DUfqfsDkFdLVErzVbD3ydDUh3o8qRKnYTXOu2uBa23tl0VjD9A3JvI/XzroQehnHMMt21ctv7rAgnp0b0MH0pVWlnbCZSqZHSuQWbktCyGJgAbEnw/8U8cGwhsgqQMxElwZB8IMFd9tR40s4ThLWEuXWKl1ViCCSmikzy0MRPjRns/xpb9kXfd/WPbj3hKkwZHIgA+tDhKQb4jrMJuJxRqSzWN7/M/NuSPrfgzXnFMt1AJOuYHYR3TqPhVHE4tVA/MTOWNpAnU9Kj/TCTOVOgkmJ5EiND4SPA7102NMyuZVeIyoQvC1hRLCAQ4Y5h3AO8szEjUeYorwHggE5QS5VJGaYGsSNhpFEMHww3HDGNFAZgAFJB0GXn1HSPKmvB2UtqFWPHqfM1VWoxpJaLnX79/3KTH1AMxsNP4QTEcKdLT3J7wB0HSZOvlNVcCc9q7aG+XOnmNY/rrTTdIIIOx0I8KSsJiPZ4hFH5WKn+9oaw1W95Z+hBafI/z8oKxOHrU6jNj1m/uDJ/wCRu0HDkdw0aNuesaqf66VSxV17bLZtWrUFZa4y52J6AHRR/Lxpp7UcLa2XUCAGJXyklY9NKWbt+FFzUj3Z1Inf0JBHwrgYMuyljtW2vy3XssWGyHt0df7090Ax/BNc5iDuAPdYakeURH+xolwy3kUKKYeE8NYo7XkGW5ACsNTHenXUHy13qlxfhdu0AFZiXJADR3QNNxyM8+ldgYd9UD7HE+Q1PAAlcum9ne5BqdOZ4eZ0HElHOyvbCxnS0mZ0trLXIhc+8KDq0E/KujWeIFlDT3SJBiuJYbhPs9yZ00GgB6AUds8Ru27QKuRlbaSR4SD5mkUceC5wLbASPQLqYvsZrabMjvEXBpO3im/oei6NxV59n/3APPusftUd7l5j61Rt8ZS/awpke0ZixUcsq3FPkJ2q3cb3fOtpdmII5LhGk6nLXagmfRQ2/27+Fu3/quVewom8nhJ/wArVRsftbp8LY+AY/eiHDVm8PBWP0H3pmyzjVGCdfSa9n6V7Gp8q9K0tOBXg3revAK9qKioL1qZ22351BYwKgysj6Hx8PSrV0aVHZTKILk+cUJcBqgIE6KpftrOUzcYagaaDxPxrKkxGNVTBIHyn1517Wfv6bfCEs5Z1C+cOyttsTiVw6T+uBRiPyrGYv8A3cs+kc6+icLhks2ltWxlRFCqPAfU858a5L+BHC9L+LYayLFv4B7hHnNsehrrrnSugBuiebqQHSK1saacq0RtK9V9KuEKy/agyK2DSPGoLWL1htqkdIMipyVlZcvgRO3XkPPp51W4nhxcR0PMR68vnFWEbcGsbw1FXCpc3v8AD7rLew6MSzYV8qad64Cw9J+tJv4Z8Sb9bhyCQZuKoGoZTlYQesj4V1jEWMmNtONmDL8mP1n4VxztShwPGrrJKg3FugcmS6A1wRzGY3B6Uql4ddijqDNJG4TzdxID2gSNTtqP2hMaHfUKOe3jRDAW87KAY90abQdDPjodYqu/CUuqsQCpVlMDL3dRPLN/Oi3BrE3csGQZOkARm5f1vXRcYBXLYJIHl9+fdONi2qqABAA2Gg+Vem7FQXLvKq93EAHWsULqKXEYrkKTeI3MuJJ/eT7UzW1LZj40q9qJS8OegI88xoalm+o+QsWObLAeB/8ALh+UY7V25uA8ihHwM0rYe0URmAIRZbNqVhj4bGTTF2wZilqNyfqutS8AwqvYNth3WVlP+KJ9JU+lcqgMvaVUDdoPtC9LUh3Z1N52Meku/wBJOxHHV1Fslj1IIAjTSddudVLt0u2cydBp1aIPpIJqlicKbd10IIIYyD4UycPwKKmqqx3zb+mu1Yn9oOFXNUdGtrxplIAHIkSfdeiZgsNhqA7tusXOpuHAzoIIBgQOAQP9Jj3j61rxLF5LOXcs8AbflJM0wrw+0D+zU+evyNSYbIjOSgfPE5tRM8vSR61iw+NohxDjsR/cJuKeX5cjdHB3DQzbZTdj8Gv6NZvfm9o6E+GQkfWmZm1XzP0NLOExvslKIAFLm5ljTMRBI6acqupxbUEqunnXRo9q4YNAJIgAaHbylcHGYGtUqve0WJJ14q97RgbxUSc6gf8A80/nR3hQ/WE9F+pH8qCcOfMHb+08/wCVB9qPcGHefyX7122uDm5hoQOq8+QWuynj8IovPzratFOn9da2qiiC9rK1U9a9J0qlaC4DE+1LDvRmPlqYEQNo60RvyBO46Vpw+1ltgnQkSfXlWmJVj7pA33mk4trQSWD792SGB2STqfvkh9z2bkKQdiQDtvruDGtZUgvamQDtzy+PrWVg8G4H37zSg3Ncx7Ja/DHBGxwywh0Ym6zeZuOPkAB6U159KB9mbwOGtxyzj4sTV9n0ruJqs2LtSo2tUAasWHq1FJi7MjSo8Jifyt6GtcbeIIAqF7ek1IUVt2hq2Qxp+U7eB6eRqqbkgdRVhDIIq1SrcTsTkbmrqfiYPyJrnH418MBTD4kDvKxtMf3WBdCfJlb/AB106y+cEHdTB8xqD66GlX8U0B4bencG2R5+1QfQmhjVECl+xdvW7a3EBuKwVoJT8wBG2uhIiNaeeA22FoXLi5bjDbeF5a76769aT+AcOGJw9i03um1aNzfVQFLDTrt607YrERoPKiFUuEFD3LWOkLZrlDb93vb869fFQDQ1L+Y5tT05z1PlVgI0WtYwICSQJ29KWe2l8FrR11DDURMEGesa0XtYcuZLQeQ6eVD+K8KF0rLt3Sx0MTMTMg9KCozM0gJdZhe2By+UU4uS2HsOByT5irnZdpTLHus4PrBFU1YtaFjMFUZYO7d3YbUb4Rg1sqYYtmIJkRrtoIEVgOFqDHGvbKWxrefJdNuIZ+hFA/uB+39SkDjuKVeJk3YyBkBkaZTDEnruab8DxLBNqAhAAjuaEa6hY+cVzvt7Zvfpt4lSRKwQN1yqR8NqW7XaDEWCSAp0yjMDC6zOhBJ86TSllR4cyQSTcStvaVN9XC0XYSo3O1rQWl8SI5H92YiQY35Ls2O4rh+7kMQZ0QCfpWp7RWHbK6mBG65vlrXEMV2uxbkAXAvPRAPqDTHwbGXVtKzsbjvDFnkwrAQAo0AHjG9bBifDG3kvOVMB2q05i6nI/wAtY46+y6Ji8bhnKC3kGus2yCfLSiV3AWInJ8Cy/ehPBLNl0s3FT9YFOckyCTsQASBz6b0XvmtYw9Kq0Z2NI8gs7cbj6RLXvgj/AKl35KA3+0OEwzG0bjTmJIC58snYmeXxpp4TxG1lNxXzK8FSByE/OuIdq+D37V/LBIus2R9wZk69G8KtdnuJX+HEh2N6y579sxKn+1b8fDn4VlNVtM5HCOXxxXTZRdUbnY6eJsZnW1vld3/4lbES0T4Gtf0+3E5x86ScH2htYhc9i4rgbqfeXwZfeU+GnrRJLsw3LlzrRRZTqWuD6LLWq1qPAj1TMcYn9r61i463BGbT1ilssdvjXhedOVP/AEreJSDjn6QEwrxG0DAJ+B+9WHsqfH15Uo3r4RSx8h58qaeED9ShiCVEzvMUjE4dob0umYat3ri1wGkqpiOH5jIWOXKdJ12NZV7GNEb+YBNZWLIxtsgPqFoDmstllIXYXF5rIB0y3CD6wR9TTFeEGPOk/sAp/RmuHdrkGNu6q7R4n504YoyQeomtyoheA1vbeolryYNRRX7glaqriCNDVvDtIqldXWi2VLZmqey9V0FeZ4qBReXXNu7m5MIb05+dBPxUwxucNvFfy5Lnorrm+Un0pivJmFVcXg/aWLth/cuI6eWZSDHxqEKwUv8AZBfZ4ZGO7W7e55ZR8N6I+1zHnQjFXf1dvKdFGXpOgg/CssYqRBMdDQUiHNlWA8WfqJ+THSFZ4iYBGskHQ6n/AMVd4ZhAVkGGn7VR4e36xi3uwAPPUsfmvwo9atgbHxoyj0Ui2lbRhlbryNbfoR/dat/aSIOtaetSEMqRcOo5KDVuwNCKoZwK2TE1IVSue/jF7Rb2HewWD3bb51UTPsymVvgxH90Vzdy7n9Y7T6Gugfijx57eIsrbIDCwCTzEs0D4LPrXO7ZObMdSRP8A5rnOeG1Y53XoKWHL8FIJmCRBNtdtIiANRy4xJYEgxqTHgY3MV0bgGCt/owze8BKD+JpP1mKRWJgRvPh9/Ku+4XsTYFtAGuKQijcHWBPKmOw5a/Ptp8LIMcx2GFKPFMm1tSR7/CC9nGgkeAoxfuVHe4IMMwIcsCI1ER6z4VSu3yDBrq4Vn/GF5nG1JruPl8KTFdnreL9mbpORGJyglcxiNSCNAdfSg3Evw+hrj2nkMZytHd30X+eh0pj4biZtxMan7GtOM8VXD2GdrijQhS50LH3R41lxNNrnGVvwr3MY3KuTcT4Ncw2LtXrSFWDAPJC5hsw1IzSpO010Xg2JlSSdiQP6+NIF7GF2Ds3trtxu6RIAPUlgDAE7aR1p24RbyoB4UPZ1N0knQWHE/wBKdqPbla0G5ueA4e5RsvWhb+vAb1GGrMXnt285tyHBBnTKI008a6Faq2iwvP8Af3ouXh6Lq9QMb/Q++6pHi9q5lgMYJidiw5yOe2lNmA4rltqDE89x4+Nctx3Fe4VCxBJEaQRoTrvIij/CsRibtpAf1KBFBfe8/dAJWfdnqR6c65LMU+owMd4ja8R5jhHNdt+Dp0nmpT8INomeEHjPEJ8biyncL/i/mtZSvYtKihV2HUkkk7kk7mvaMMG6UXmbIL+HCA8Ot5WJGe7uIOjkQfhTXabNbHVe6ftQH8P8NkwSp/8AsvkeTXnK/IijFg5LuU7Pp68v68aYFCp0NZcrH0NYatVK2wt4g1bv2pGYetCWYg0U4djFbQ1AVCq89K1erN5QNdtdqr3DRqlawpqR9/KquFbWrV1qtUkXg6G/Y0YTnYEclKEqU8IINVOIWGtNlYgEjMNRtJE/EUQ4fgWscSxSf9K8qYhemdiy3fWQD6ig/wCJ2IytZ1KnI8EA9VifDeudhG1qb6jSZaCSLXvDvzHmjxOLpvrU6QFyLmbCJHvafI80jcW7U4izim9k4ZEMFG1UzqY5jfkac+A/iRh7sLcb9Gbbvgsvo4EAeYFcrvsS7FtSSda2FpTyrZmJuigCy7zZ7TYVtFxlhz4XEHxk1l3tPhV97GYYeHtVJ+tcEbBJFQtg1jQmizHgqhd0xHbbBr/+TaPk4P0oVifxDsyFszcYwJysFE9SRvvHLxFcjTCq2pYzt8NKN8Ct20udcytvyMafKfjUzEqiIVXjONe9euXWJLOxOu8bKPRQB6VFavE7iKL8BwYu8Qw1siVe/bDKdiuYFgfAgGpu3GFUcWxK21CoLgAUABRCLMAaDWfjSDhmkmbytje0azWgMMR5XjzHRTcDwmd7c7M6j4sBX0rXCewmG9vjbFuO6h9o3kneH+bKPWu24lzIHKJNOqXDWrFTOrlFiLYc6geEwwI8qo43hNpxooU7SJ+k0T0NCeK8bSwwUgs0SdYidvWg7zuxMwr7rvDESUkdsuAYr2iGzfuWVVSAyyykzm76+GsmCI570uP2Jxt4i5eve3gd0+0AWPDNAXy08a6LxDjOGvZPaK4ymRBA3BBB8INW04xhXMEFZ3Ognpqpms7nsfq/qtTGuYB4NOX9bcCud9m+FMmIi7bOUD3tCogycpB706RlmnRrdm8f+WPf/NbZHtHrKi4o+FMNuxaZe6ZAnK2YllkflYnMKkwZYKA5DEEjNtm10J8Y3p9EmlAakYhrKwJcb+3qNfXpKUb6MkhgQRyPM8vMUj8X4zi3vLh0ac5gT8TPhFdC7V4wlwpjQToNddtfnSDg1z8QQgTlDnp+Ur9WFLrVf1GJZTIsLe+quhR/S4apUm9z7C3VGOC9nB7RVuv7Vzr3hlthvy6ASRPWfKnNuB4gckPk5+6ihmCtwxbmCD/XSn1GkA1sxVNlKAwALBgqz6+Y1CSZt5f2El3OG4hd7LehVvkDNe06E1lZcy3d2Fz3s0cuGtx+9/raiV9ww8eR6Ur/AIZX2fhthnYsxN2STJ/bXOflTHMGmpehUjYmfv58/wCvGpFuUO4g0MI6fOaqLjyNKkokVvtVJmIrZMVNTJcU0SGVd4dxiNHE8p5+tXMZDDOo8/50PtWByiimGQARuOdFA1VKjaaDVpmqrftFWjly8qkVpIHU0QVKv2gUoFuqBI7pnodRr5j51zH8TMfnNlssd1wdZG6npXUe2eIVMJcJYSMpAkSYYTA8pri3bTHLdt28pmGM9dQP5Uhp/wCQKjh6ZPex4hv9slJzJNbK1e3bBCq/5SSAfECT9agY61bhBhOBkKYvXi3N60BrQmoqUyXJJ+VWvaQVPkPufkB8ap2RXpuy48J+lRUV0H8M+Gm7xW0Y0tBrzf4Sq+uZ1Poaq9s8Iy8WxcqYNwMD4MiMPr8qY/wZtkY67roMP8y6UN7fLPF8VvGW0CJj/pJTJ8fol/8Ax6/hOn4P4G2LV6+INwv7MnchQFMepM+gpm4rjvZ3YJ0ZQR6aEUtfhapsYJ2YEK11nQTuoCqIGwkg689KuY3DnEN3p16dByFVkOYuKA1f2sb6/fhFDxhFUsWAjqYHxpJxdrFXr1wpZZ5YsCsZSpPd7220aTVbtzayFLQs3BaRZNwqSGLE++yiBGwnrQLheOuWTNi+6DorSpPiux9RSatEVRcrVRqmkSQEcfgONY//AG9weZX/AOVV73DsXhznu2WyAbqQ8earr8Jq7Y/EHFWiFuC3ekaaFCY/eXQfCmrgXaW3js1v2To4WTMFSJA7rDxPMDY9KUMHTCacZUKUrHatkCi2M2YwpOnn6aGjvAu2RMreQbEqRI2JkHQ+lBO1XZx0c3bYGkwYkCd9BsdTr40J4VbKjvNmMDlEDceuv0rO9tSjebLS006wiL9Uf4jjC5Z2OrEk/wAqDdmGBxF1iSITcCTqy7aeFa8RxUA1nY1pe83gg/1Gr7OBOJafP4KV2mAMG8eXyE78KIfNl6DeeXWadMG021PVR9BSbwK0O8RO3OnHh37K3/Av0FdjHx1HwuD2VofX5U+s15W9ZXPXXhcg/Co//TLHnd/9a5TRcpX/AA1t5eG4YdQ5/wAVxz96Z8tPGiSdVVvjvHyA+U0Lu24J+VFL3vN5j6CqV0VcK5Udm7FW7euxoa2hg89j9jUtt4qwqKL2mYc6J4C+uzGgljFDnRGwbZ1mjCpGMdbBWRy+lDbLBrgUH3dWHnsPlNEbDKRlGk6Up8Nwd6xfvC68lmzAjQMuuUjmOkeFIrPytTaLM5hOuMwa3bZRhIMfIgj6VzL8Uuy1mzgzeTKjK6RyDZjBUeOs+hr3t9fW3Z9uDlZGWHBhhLAESNedKHb7jl3F+xw5uFrNgAliNblzLBuN56gDx8dF0XZhmhFVYWmEsOScLophLwBbMCsur6RuD3fLSqM09cR7KvhuDXLlzRjesOBzAJKEt498D0FIRNOe7MZKW0QFtNa5q1mvKpWpkbSfWoLLa1vdMLWlur3Qro/4WY+4l+9dWYCKk9SWmP8AL86i43fuYnizqPevNbTyARQW9FBPpVrsdcCYVSq7liYGs+Pp0q92KwhbHYnFupCoMiE6SWAkieYUD/HTmz3hSXGGSnjEYm1ayWyQttAq+gG0Df8A2pT4h2nxHtIwt62qgaggMx10hCconzr3iNlrjl3Z99ADCqOkc/M0p8aQ27wlc9o6xrmXqUI28udaHUwRdZaRIJ4n7H3mmzB9tOI+0VHtWHzGAy9xh/EpBnyWoW7R2cQzHF4FA22e2Ht3IG2Yd1ttYOo6UvrxDLBtAlZAmSSfvXnE8U90Rcco2kFCCwA6g6ancCKS6hfwn75rS2rbxCPvBNWF7N2sUpbB4hsw1Nm+veAPuwYBg8iQabeyfAzhbR9pl9q5lo2AGiqPAb+ZNck4MlxbocYj9YFyrdDOjRrAdNdB4EjfSnPg/wCJFywRa4iqkbDEWhKnlLruvmPlS3Nc0XTGuBNk7cVkqwUCY3Ow6k1yHCcZQl1MK2YwNpXkQOXlXT+03GFOCuXMM6NntOVdTmEBSWII8JrjmL4ctwSR9vga5mNqRDV3eycH37Hum4gDrM9IPmtuL8VABEimLsahW1J3c5j4cgPh9aVMP2etFgczEA6qWzfCn7hGHGTLbcNH5W39KDDVu7dmp6rViOzQ+mWYjTkSPWbdbJr4XdEGD+Uj6U2cM/Y2/wCBfpXNrFy4re5liZjn1BFdD4NdBsWzO6iuk/Ed8y+s36rzzuzjg6sNMtIMcr6GOmkjnKI1leA1lIRrn2B4fbsILFoEW00QEyQJmJ571aANC+E4lzZttdj2hQF42zRrRG3jl2rSkHVVy+rfxH7VVYSasodD4k1Eo3qKKC9YBEVBbWO7OvU86tuaq3VqASpKntoOcVbtwuuwG5PKg7M4MgCh3Frt1hqx02A0H+9Na0oCYTJ/xJmIyGFBGuxYjY+VWcbxRXZAdXCtmI/skiJ9QfnSC2OxS2i6Wg+UjNoxIUmCwA3jc1nDOOG0XclbhuKFbMIyxMFfjt4CseJkeE7rXhQCcw0Ct/iGwHDnH5iUMT1uKa17KdiLIFu8ztdkK6g6KJAIJHOKSe2nG2uXPZhtNGf/ANq+m/qK6j+FmNF3AWwd7Za2fJT3f8pWhotgKYh2Z1kU7cYbPwrFrvFvOPO0Vuf+2vnt6+pMRhhctXLXJ0ZD5MpH3r5aZSBDCCNCOhGhHxpzkhui1mvZrSthUCJeXm2ojwLhrX7gRdtMx3gTQx966n+E3B8iXbl9GUsyBAywSqgyYO2p51bQSbIXuaxskwuhcB7MWf0a2gUAKPI9SSetD8Qlu3NtPdBJPiT/AOBRrFcUhCoGVQCT1IH0FKOEufnOqvqecE6z6Vto0i0y5c99dr7N2Vm4sgxS/wAasggE7T8DTFflQY1K/wCYUu8ZvCDG24rUNErdI1/iLWnNv8oZsp0gDXcnYDSt8JYN1pyveb9xlT0lmB+VG+B8FW6/tXAiTkkA894JpzPDEjUA+cj6bUhtIm5K0OqgWASdg8IVID2HtnkWuW3+Ox+tWuJ8M/SFKzDjUag8um/9b0z/AKOACoJHQHWPKeVBcXag94ju6hgII8o3HOiLARBQB5mQlLgnaG/gxiMIXKBkfLsQGKmcsjSRqDpr50S4JifaWlJiQAD0oL20VHYOCJET4g/71d7Lko5tNyj4Nt9K4WPokDyPyvV9g4kCqW6Zh1CZcDYE6iiYwXNDVS2Iojhr3KsNNoiF6Cq5wMhTW+JsBlvJnHXY/GmzsdxlMrWmKoAc1uWHuncT4Nr/AHqWM45ifCoXYIc9tcpGuk+oitLSWmSVzMTRbVYWtEHbhP8AOi6li8SiIbhjKI1HiQPvWVzO9ezrDBSpg9J5jUVlaV5vMd1vwm7msoeo+5q2iCZoVwK9/wAujAaaz/iNFkaa0hJXiK0aba16ogVujaVqpq1F4wqvcWrBFaMtEoq0VUxlqZonkrSxYzN4TTGJb1Z4TgwlrxIk/Clztnw0Olog5G9pLldGZArd34xrTnZFKPau6ZGUSV0ImN9f5UNY+FXSs6yQsX2RtSXF5xOupDeep1Pxpz7CYIYS2UFxjncO2gPIDTpsOfKgNwXmHdtKCdZZ+nlV3A2cSBLKjeTsp+9ZgnldTXEooB9oCNP661879ssOLeNxKDb2rsPJznH+qup8ItO576hR0DTPma5T2wM43Ef91x6AwPkKslU0ILNWMLYa4wRFLOxhVGpJ6CoCK6X+EfD1VbmIKgszezRuYUAFo6ST/loqbM7oQVqndsLkS7IdibeHHtb0PfPqtvwTqerfCnPDIBoo8zU62g3Kt7vdEV0mhrRlauG9znuL3FAO1F8iyUUnM/d9PzR6aetVeFp3dNjuvTxFVO2mMNzLaQQysrZp2PIL6TUnDbjg5WgtEyNA38jRp1EQxXr8qInaY8V5g+Ipbv4U3WKjYHxiDrEgHxo5iMUrhQDE7SJ1Egj5EetQLhgCCRlYbMv351aYFewGEyqBlIIjSQVYeEjetsRiSnIAcunlpqKstiSoGY+HUE0M4liwQV5nbofA0NyiWXOIIe6RkJ25j0PSg2Pvwe8Bz/oHpQfFY+CYnIRJU/OOhqli+MMbeXcg6Hn/AFp8qEkAIg2VSxSG/d9mglZ6dRtRPiFhrV2y7CCRkJGxIkrPzoj2N4bClj73MHXQ6rr60S7TcPzWG6r3l8CPtS62F7zDuB1In2uFeG7R7jGseP2tMH1sel1JaMgHrrVlGoXwa/ntKavhq8w3RfSXDZW1uQNTUd6+IgGJqEvHKtQobejkpeTdb2cWoBUsN9Ndxv8AKvKpYuyH0IkDrFZT6dUZYK4WNwFR1Yupixv679br/9k="
                class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bloodline Charitable Blood Bank</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">    <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i> Phone no:</label>935468925</a>
                <hr />
                <a href="#" class="btn btn-primary">Send Enquiry</a>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4uHywrdcws-2G5_k-CpWrKAwRS3-XT4_J1w&usqp=CAU" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mira Bhayandar Munciple Corporation Blood Bank Trust</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">    <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i> Phone no:</label>935468925</a>
                <hr />
                <a href="#" class="btn btn-primary">Send Enquiry</a>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="card" style="width: 18rem;">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-c0UX_nQBXJnxGiGwn2V0lpvsqzNvlCOBg&usqp=CAU" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Manas Serological Institutes Blood Bank</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">    <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i> Phone no:</label>935468925</a>
                <hr />
                <a href="#" class="btn btn-primary">Send Enquiry</a>
              </div>
            </div>

            {/* <!--  --> */}
            <div class="card" style="width: 18rem;">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7ZICDLhtdpVsTrp9K14gs-JEz48bMQtT5w&usqp=CAU" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sion Blood Bank</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">    <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i> Phone no:</label>935468925</a>
                <hr />
                <a href="#" class="btn btn-primary">Send Enquiry</a>
              </div>
            </div>
          </div>
          {/* <!-- doctor end --> */}


          {/* <!-- more info --> */}
          <div class="row g-5 col-md-8">

            <article class="blog-post">
              <h2 class="display-5 link-body-emphasis mb-1">Sahaya: A Centralized Blood Bank Management System</h2>
              <p class="blog-post-meta">January 1, 2021 by Hon'ble Minister of Health and Family Welfare, Sh. J P Nadda. <a href="#">Mark</a></p>

              <p>Sahaya enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management and monitoring the quality and quantity of the donated blood. Considering the national roll out, e-Rakt Kosh has been developed with modular and scalable approach with configurable rule based architecture allowing customization to easily incorporate specific requirements from nationwide stakeholders.</p>
              <hr />
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h2>Overview</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote class="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3> Six major components for management of the blood donation life cycle:</h3>
              <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
              <ul>
                <li>The bio metric Donor Management System for identifying, tracking and blocking donors based on donor's health, donation history etc.



                  Generation of rare blood group donor registries and the generation of regular repeat donors
                  Alert and Notification System</li>
                <li>It provides features such as blood grouping, TTI screening, antibody screening, component preparation etc. as per the defined processes and rules.</li>
                <li> A centralized Blood Inventory Management System for keeping track of the blood stock across numerous blood banks.</li>
                <li> Bio-Medical Waste Management System for disposal of discarded blood and other waste generated during this process.</li>
              </ul>



              <h2>Today We Are Still Evolving</h2>
              <p>Global Health Limited (Medanta) is the largest multi-speciality tertiary care provider in the North and East regions of India in terms of bed capacity (2,467 installed beds). We deliver advanced, affordable end-to-end healthcare in Delhi, Gurugram, Indore, Ranchi, Patna and Lucknow through our network of five hospitals, six Mediclinics, diagnostic laboratories, home-care and telemedicine services. We aim to extend specialised care for complex cases in under-served densely populated areas through our patient-first model of healthcare. Our facilities have received different national and international accreditations, such as from the Joint Commission International (JCI) and the National Accreditation Board for Hospitals and Healthcare Providers (NABH). <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
              <ul>
                <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
              </ul>
              <p>Most of these elements are styled by browsers with few modifications on our part.</p>
              <h2>why only Sahaya</h2>
              <p>Sahaya Institute of Education & Research (sIER) is committed to the advancement in medicine through research, innovation and academic programs that center on individualized and personal care.</p>
              <h3>Sub-heading</h3>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <pre><code>Example code block</code></pre>
              <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
            </article>


            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Upvotes</th>
                  <th>Downvotes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Charlie</td>
                  <td>7</td>
                  <td>9</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Totals</td>
                  <td>21</td>
                  <td>23</td>
                </tr>
              </tfoot>
            </table>
          </div>


          <article class="blog-post">
            <h2 class="display-5 link-body-emphasis mb-1">New feature</h2>
            <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
          </article>

          <nav class="blog-pagination" aria-label="Pagination">
            <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
            <a class="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
          </nav>

        </div>

        <div class="col-md-4">
          <div class="position-sticky" style="top: 2rem;">
            <div class="p-4 mb-3 bg-body-tertiary rounded">
              <h4 class="fst-italic">About</h4>
              <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
            </div>

            <div>
              <h4 class="fst-italic">Recent posts</h4>
              <ul class="list-unstyled" />
              <li>
                <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX7UcMve9FUKn7HrI52_ycxU9YsA5IxB7D8XymVoJPuhmzUDrZ0a50F3VbdI8UUtYk2Y&usqp=CAU" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></img>
                  <div class="col-lg-8">
                    <h6 class="mb-0">This is another blog post title</h6>
                    <small class="text-body-secondary">January 14, 2023</small>
                  </div>
                </a>
              </li>
            </div>
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5Y_cGZb9oIh8QE1Hjta8nyOe8dph0EaCFFQf8YLBdWBdsNTxjzASIfe2Ixf8XXXVaVI&usqp=CAU" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></img>
                <div class="col-lg-8">
                  <h6 class="mb-0">This is another blog post title</h6>
                  <small class="text-body-secondary">January 14, 2023</small>
                </div>
              </a>
            </li>
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX7UcMve9FUKn7HrI52_ycxU9YsA5IxB7D8XymVoJPuhmzUDrZ0a50F3VbdI8UUtYk2Y&usqp=CAU" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></img>
                <div class="col-lg-8">
                  <h6 class="mb-0">This is another blog post title</h6>
                  <small class="text-body-secondary">January 14, 2023</small>
                </div>
              </a>
            </li>

          </div>



          <div class="p-4">

          </div>
        </div >
      </div >
      {/* <!-- /more info end --> */}


       {/* <!-- footer start --> */}
      <div class="bg-dark text-white ">
        <footer class="container py-5">
          <div class="row">
            <div class="col-12 col-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
              <small class="d-block mb-3 text-body-secondary">© 2017–2023</small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Business</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Education</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Government</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Gaming</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Team</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          </footer>
          </div>
        {/* // <!-- footer end --> */}
        </>
        )
}

export default App;