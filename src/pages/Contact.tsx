import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9962220400"],
      action: "tel:+919962220400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@fcmbookings.com",],
      action: "mailto:contact@fcmbookings.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["113/77, Chettiyar Agaram Rd, Numbal, Vanagaram, Chennai, Adayalampattu, Tamil Nadu 600077"],
      action: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+-+Centre+of+Excellence/@13.0546361,80.1488909,851m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5261ff119b5dfd:0x2b7eac202ee7814e!8m2!3d13.0546361!4d80.1488909!16s%2Fg%2F11y6n_n6d_?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      details: ["Mon - Sun: Open 24/7", "Customer Support: 24/7"],
      action: null
    }
  ];

  const locations = [
    {
      name: "FC Marina Vanagaram",
      address: "113/77, Chettiyar Agaram Rd, Numbal, Vanagaram, Chennai-600077",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+-+Centre+of+Excellence/@13.0546361,80.1488909,851m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5261ff119b5dfd:0x2b7eac202ee7814e!8m2!3d13.0546361!4d80.1488909!16s%2Fg%2F11y6n_n6d_?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+-+Centre+of+Excellence/@13.0546361,80.1488909,851m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5261ff119b5dfd:0x2b7eac202ee7814e!8m2!3d13.0546361!4d80.1488909!16s%2Fg%2F11y6n_n6d_?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Porur (Keppel)",
      address: "Keppal Software park Pvt Ltd, One Paramount, 110, Mount Poonamalle Rd, Porur, Chennai-600125",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Porur+Turf/@13.0311527,80.1646972,1122m/data=!3m1!1e3!4m6!3m5!1s0x3a5261a3809205f1:0x97227fb8be73c538!8m2!3d13.0310078!4d80.1682374!16s%2Fg%2F11xmd0sryw?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+Marina+Porur+Turf/@13.0311527,80.1646972,1122m/data=!3m1!1e3!4m6!3m5!1s0x3a5261a3809205f1:0x97227fb8be73c538!8m2!3d13.0310078!4d80.1682374!16s%2Fg%2F11xmd0sryw?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Nolambur",
      address: "230 4th Main Road, Apartments, opp. VGN Flats, Nolambur, Chennai-600095",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Turf+(Nolambur)/@13.0772497,80.1627306,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a526158a80e9739:0x44f592770ade844a!8m2!3d13.0772497!4d80.1653055!16s%2Fg%2F11rgzwbtbg?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+Marina+Turf+(Nolambur)/@13.0772497,80.1627306,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a526158a80e9739:0x44f592770ade844a!8m2!3d13.0772497!4d80.1653055!16s%2Fg%2F11rgzwbtbg?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Thalambur",
      address: "No.6/858 Thiruvalluvar Street, Natham, thalambur, Chennai-600130",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+FOOTBALL+ACADEMY/@12.8540869,80.199116,3433m/data=!3m1!1e3!4m10!1m2!2m1!1sNo.6%2F858+Thiruvalluvar+Street,+Natham,+thalambur,+Chennai-600130%22!3m6!1s0x3a525b766d066039:0x52a8490aa73700b5!8m2!3d12.8400089!4d80.2144489!15sCkFOby42Lzg1OCBUaGlydXZhbGx1dmFyIFN0cmVldCwgTmF0aGFtLCB0aGFsYW1idXIsIENoZW5uYWktNjAwMTMwIlo_Ij1ubyA2IDg1OCB0aGlydXZhbGx1dmFyIHN0cmVldCBuYXRoYW0gdGhhbGFtYnVyIGNoZW5uYWkgNjAwMTMwkgELc29jY2VyX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTlFNWFV6ZEVoUkVBRaoBchABKgoiBm5hdGhhbSgAMh8QASIbTw_bhixSuMfKCaGFxP6Ecg9MsdvnX3nafVTPMkEQAiI9bm8gNiA4NTggdGhpcnV2YWxsdXZhciBzdHJlZXQgbmF0aGFtIHRoYWxhbWJ1ciBjaGVubmFpIDYwMDEzMOABAPoBBAgAEDQ!16s%2Fg%2F11l36ggg5s?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+MARINA+FOOTBALL+ACADEMY/@12.8540869,80.199116,3433m/data=!3m1!1e3!4m10!1m2!2m1!1sNo.6%2F858+Thiruvalluvar+Street,+Natham,+thalambur,+Chennai-600130%22!3m6!1s0x3a525b766d066039:0x52a8490aa73700b5!8m2!3d12.8400089!4d80.2144489!15sCkFOby42Lzg1OCBUaGlydXZhbGx1dmFyIFN0cmVldCwgTmF0aGFtLCB0aGFsYW1idXIsIENoZW5uYWktNjAwMTMwIlo_Ij1ubyA2IDg1OCB0aGlydXZhbGx1dmFyIHN0cmVldCBuYXRoYW0gdGhhbGFtYnVyIGNoZW5uYWkgNjAwMTMwkgELc29jY2VyX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTlFNWFV6ZEVoUkVBRaoBchABKgoiBm5hdGhhbSgAMh8QASIbTw_bhixSuMfKCaGFxP6Ecg9MsdvnX3nafVTPMkEQAiI9bm8gNiA4NTggdGhpcnV2YWxsdXZhciBzdHJlZXQgbmF0aGFtIHRoYWxhbWJ1ciBjaGVubmFpIDYwMDEzMOABAPoBBAgAEDQ!16s%2Fg%2F11l36ggg5s?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Thiryuvanmiyur (Roof Covered)",
      address: "Thiruvanmiyur beach, 111, Bay View Dr St, Kottivakkam, Chennai, Tamilnadu 600041",
      phone: "+919962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Thiruvanmiyur+Beach)/@12.9688839,80.2547922,3432m/data=!3m1!1e3!4m10!1m2!2m1!1sThiruvanmiyur+beach,+111,+Bay+View+Dr+St,+Kottivakkam,+Chennai,+Tamilnadu+600041!3m6!1s0x3a525dcbdde45771:0xa97db1e275e30698!8m2!3d12.9727355!4d80.2658124!15sClBUaGlydXZhbm1peXVyIGJlYWNoLCAxMTEsIEJheSBWaWV3IERyIFN0LCBLb3R0aXZha2thbSwgQ2hlbm5haSwgVGFtaWxuYWR1IDYwMDA0MZIBDGZ1dHNhbF9maWVsZKoBdBABMh8QASIbsbR073W69V4DZWEpm4QdrA5MXEVNmaJcqYC-Mk8QAiJLdGhpcnV2YW5taXl1ciBiZWFjaCAxMTEgYmF5IHZpZXcgZHIgc3Qga290dGl2YWtrYW0gY2hlbm5haSB0YW1pbG5hZHUgNjAwMDQx4AEA!16s%2Fg%2F11jzcwz8sc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Thiruvanmiyur+Beach)/@12.9688839,80.2547922,3432m/data=!3m1!1e3!4m10!1m2!2m1!1sThiruvanmiyur+beach,+111,+Bay+View+Dr+St,+Kottivakkam,+Chennai,+Tamilnadu+600041!3m6!1s0x3a525dcbdde45771:0xa97db1e275e30698!8m2!3d12.9727355!4d80.2658124!15sClBUaGlydXZhbm1peXVyIGJlYWNoLCAxMTEsIEJheSBWaWV3IERyIFN0LCBLb3R0aXZha2thbSwgQ2hlbm5haSwgVGFtaWxuYWR1IDYwMDA0MZIBDGZ1dHNhbF9maWVsZKoBdBABMh8QASIbsbR073W69V4DZWEpm4QdrA5MXEVNmaJcqYC-Mk8QAiJLdGhpcnV2YW5taXl1ciBiZWFjaCAxMTEgYmF5IHZpZXcgZHIgc3Qga290dGl2YWtrYW0gY2hlbm5haSB0YW1pbG5hZHUgNjAwMDQx4AEA!16s%2Fg%2F11jzcwz8sc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Madipakkam",
      address: "200, 9th St, behind Dr.KAMAKSHI MEMORIAL HOSPITAL, Madipakkam, Chennai-600091",
      phone: "+919962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF/@12.9514122,80.2017817,858m/data=!3m1!1e3!4m9!1m2!2m1!1s200,+9th+St,+behind+Dr.KAMAKSHI+MEMORIAL+HOSPITAL,+Madipakkam,+Chennai-60009!3m5!1s0x3a525d2cecb058cf:0x2256deee37b67f68!8m2!3d12.9514128!4d80.2065957!16s%2Fg%2F11fnjz25nc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF/@12.9514122,80.2017817,858m/data=!3m1!1e3!4m9!1m2!2m1!1s200,+9th+St,+behind+Dr.KAMAKSHI+MEMORIAL+HOSPITAL,+Madipakkam,+Chennai-60009!3m5!1s0x3a525d2cecb058cf:0x2256deee37b67f68!8m2!3d12.9514128!4d80.2065957!16s%2Fg%2F11fnjz25nc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Kovilambakkam",
      address: "Manikandan street, Veeramani Nagar, Kovilambakkam, Chennai-600117",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+-+Kovilambakkam/@12.9439708,80.1748446,1716m/data=!3m1!1e3!4m10!1m2!2m1!1sfcm+turf+kovilambakkam!3m6!1s0x3a525f032a02aef5:0xe8b80cc0f399493a!8m2!3d12.9439708!4d80.1812475!15sChZmY20gdHVyZiBrb3ZpbGFtYmFra2FtWhgiFmZjbSB0dXJmIGtvdmlsYW1iYWtrYW2SAQ1zcG9ydHNfc2Nob29smgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVU52TWpWaVoyMW5SUkFCqgFNEAEqDCIIZmNtIHR1cmYoADIfEAEiG1x6lvjwy6HVixkmD9CYIhTywaImiFTIx92ZRDIaEAIiFmZjbSB0dXJmIGtvdmlsYW1iYWtrYW3gAQD6AQQIABBG!16s%2Fg%2F11x1849nh5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+-+Kovilambakkam/@12.9439708,80.1748446,1716m/data=!3m1!1e3!4m10!1m2!2m1!1sfcm+turf+kovilambakkam!3m6!1s0x3a525f032a02aef5:0xe8b80cc0f399493a!8m2!3d12.9439708!4d80.1812475!15sChZmY20gdHVyZiBrb3ZpbGFtYmFra2FtWhgiFmZjbSB0dXJmIGtvdmlsYW1iYWtrYW2SAQ1zcG9ydHNfc2Nob29smgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVU52TWpWaVoyMW5SUkFCqgFNEAEqDCIIZmNtIHR1cmYoADIfEAEiG1x6lvjwy6HVixkmD9CYIhTywaImiFTIx92ZRDIaEAIiFmZjbSB0dXJmIGtvdmlsYW1iYWtrYW3gAQD6AQQIABBG!16s%2Fg%2F11x1849nh5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Perumbakkam",
      address: "260/2A, Radiance Mercury, opp. to Radiance Mercury, Cheran Nagar, Chennai, Tamil Nadu 600100",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Perumbakkam)/@12.9439699,80.1593948,6864m/data=!3m1!1e3!4m10!1m2!2m1!1sfcm+turf+perumbakkam!3m6!1s0x3a525bc901a4dd2d:0x5f55802ea9ddaa03!8m2!3d12.8949194!4d80.2012451!15sChRmY20gdHVyZiBwZXJ1bWJha2thbVoWIhRmY20gdHVyZiBwZXJ1bWJha2thbZIBDWZvb3RiYWxsX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblRVTnZNaTFUUjBWUkVBRaoBSxABKgwiCGZjbSB0dXJmKAAyHxABIhsYLsBMDDUxZJ6kEOn8bf5qVoDKT0M10my-KMAyGBACIhRmY20gdHVyZiBwZXJ1bWJha2thbeABAPoBBAgrEEw!16s%2Fg%2F11rh_44jh6?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Perumbakkam)/@12.9439699,80.1593948,6864m/data=!3m1!1e3!4m10!1m2!2m1!1sfcm+turf+perumbakkam!3m6!1s0x3a525bc901a4dd2d:0x5f55802ea9ddaa03!8m2!3d12.8949194!4d80.2012451!15sChRmY20gdHVyZiBwZXJ1bWJha2thbVoWIhRmY20gdHVyZiBwZXJ1bWJha2thbZIBDWZvb3RiYWxsX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblRVTnZNaTFUUjBWUkVBRaoBSxABKgwiCGZjbSB0dXJmKAAyHxABIhsYLsBMDDUxZJ6kEOn8bf5qVoDKT0M10my-KMAyGBACIhRmY20gdHVyZiBwZXJ1bWJha2thbeABAPoBBAgrEEw!16s%2Fg%2F11rh_44jh6?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina West Tambaram (Roof Covered)",
      address: "No 18 Karumariamman Nagar, Wwst, near Vishnu Nagar, Tambaram, Chennai-600045",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(+TAMBARAM)/@12.9230718,80.0972868,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a525f4f6b1283a3:0x8f3a73cfea038807!8m2!3d12.9230718!4d80.0998617!16s%2Fg%2F11kplb681y?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(+TAMBARAM)/@12.9230718,80.0972868,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a525f4f6b1283a3:0x8f3a73cfea038807!8m2!3d12.9230718!4d80.0998617!16s%2Fg%2F11kplb681y?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Medavakkam",
      address: "N0. 299/1A Bhavaniamman Koil Street, Pallikaranai, chennai-600100",
      phone: "+91 9962220400",
      mapurl: "https://www.google.co.in/maps/place/FC+Marina+Academy+Medavakkam/@12.9230589,80.0174597,27460m/data=!3m1!1e3!4m10!1m2!2m1!1sFC+MARINA+TURF+medavakkam!3m6!1s0x3a525df1eefd6005:0x96528214ca17781b!8m2!3d12.9302167!4d80.1965593!15sChlGQyBNQVJJTkEgVFVSRiBtZWRhdmFra2FtWhsiGWZjIG1hcmluYSB0dXJmIG1lZGF2YWtrYW2SAQtzcG9ydHNfY2x1YpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSZk1UaFBUMUpCRUFFqgFRCg0vZy8xMWZuanoyNW5jEAEyHxABIhsYMnScSEJlD-I8KkylT6QukdIGKAd7IOhd_gkyHRACIhlmYyBtYXJpbmEgdHVyZiBtZWRhdmFra2Ft4AEA-gEECAAQRg!16s%2Fg%2F11x1fr34sl?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+Medavakkam/@12.9230589,80.0174597,27460m/data=!3m1!1e3!4m10!1m2!2m1!1sFC+MARINA+TURF+medavakkam!3m6!1s0x3a525df1eefd6005:0x96528214ca17781b!8m2!3d12.9302167!4d80.1965593!15sChlGQyBNQVJJTkEgVFVSRiBtZWRhdmFra2FtWhsiGWZjIG1hcmluYSB0dXJmIG1lZGF2YWtrYW2SAQtzcG9ydHNfY2x1YpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSZk1UaFBUMUpCRUFFqgFRCg0vZy8xMWZuanoyNW5jEAEyHxABIhsYMnScSEJlD-I8KkylT6QukdIGKAd7IOhd_gkyHRACIhlmYyBtYXJpbmEgdHVyZiBtZWRhdmFra2Ft4AEA-gEECAAQRg!16s%2Fg%2F11x1fr34sl?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Mugalivakkam",
      address: "7, Roja Street, Maxworth Nagar Phase 2, Kolapakkam chennai-600116",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/Marina+FC/@13.0176393,80.0890062,13725m/data=!3m1!1e3!4m10!1m2!2m1!1sfc+marina+turf+mugalivakkam!3m6!1s0x3a52615a4b4c2cad:0x3f95722577ce8bc4!8m2!3d13.0176393!4d80.1652239!15sChtmYyBtYXJpbmEgdHVyZiBtdWdhbGl2YWtrYW1aHSIbZmMgbWFyaW5hIHR1cmYgbXVnYWxpdmFra2FtkgEPY29hY2hpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4c2VWWnNPVVJPTWtaNlpVZGtiRnBYYjNST01VWnRVMjVaTWxSSVl4QUKqAVMKDS9nLzExZm5qejI1bmMQATIfEAEiGxe8JnEBFEvLIdo0fpPrFkQ8mUzlJzvwCjxdtDIfEAIiG2ZjIG1hcmluYSB0dXJmIG11Z2FsaXZha2thbeABAPoBBQigAhBM!16s%2Fg%2F11j218qyxc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/Marina+FC/@13.0176393,80.0890062,13725m/data=!3m1!1e3!4m10!1m2!2m1!1sfc+marina+turf+mugalivakkam!3m6!1s0x3a52615a4b4c2cad:0x3f95722577ce8bc4!8m2!3d13.0176393!4d80.1652239!15sChtmYyBtYXJpbmEgdHVyZiBtdWdhbGl2YWtrYW1aHSIbZmMgbWFyaW5hIHR1cmYgbXVnYWxpdmFra2FtkgEPY29hY2hpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4c2VWWnNPVVJPTWtaNlpVZGtiRnBYYjNST01VWnRVMjVaTWxSSVl4QUKqAVMKDS9nLzExZm5qejI1bmMQATIfEAEiGxe8JnEBFEvLIdo0fpPrFkQ8mUzlJzvwCjxdtDIfEAIiG2ZjIG1hcmluYSB0dXJmIG11Z2FsaXZha2thbeABAPoBBQigAhBM!16s%2Fg%2F11j218qyxc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "FC Marina Pallikaranai",
      address: "Ambal nagar, Pallikaranai, Chennai-600100",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+Pallikaranai/@12.9363544,80.1748158,3432m/data=!3m1!1e3!4m10!1m2!2m1!1sfc+marina+turf+pallikaranai!3m6!1s0x3a525d99dd794d61:0x9d2ebb76aa2d3d65!8m2!3d12.9363544!4d80.1938702!15sChtmYyBtYXJpbmEgdHVyZiBwYWxsaWthcmFuYWlaHSIbZmMgbWFyaW5hIHR1cmYgcGFsbGlrYXJhbmFpkgELc29jY2VyX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTllOemRmTFV4M0VBRaoBUwoNL2cvMTFmbmp6MjVuYxABMh8QASIbGJLnKBvekZyZDExdcqZLOdBmEa8cvu84Fn8fMh8QAiIbZmMgbWFyaW5hIHR1cmYgcGFsbGlrYXJhbmFp4AEA-gEECAAQRA!16s%2Fg%2F11sw8vxtwr?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+Pallikaranai/@12.9363544,80.1748158,3432m/data=!3m1!1e3!4m10!1m2!2m1!1sfc+marina+turf+pallikaranai!3m6!1s0x3a525d99dd794d61:0x9d2ebb76aa2d3d65!8m2!3d12.9363544!4d80.1938702!15sChtmYyBtYXJpbmEgdHVyZiBwYWxsaWthcmFuYWlaHSIbZmMgbWFyaW5hIHR1cmYgcGFsbGlrYXJhbmFpkgELc29jY2VyX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTllOemRmTFV4M0VBRaoBUwoNL2cvMTFmbmp6MjVuYxABMh8QASIbGJLnKBvekZyZDExdcqZLOdBmEa8cvu84Fn8fMh8QAiIbZmMgbWFyaW5hIHR1cmYgcGFsbGlrYXJhbmFp4AEA-gEECAAQRA!16s%2Fg%2F11sw8vxtwr?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  const handleLocationSelect = (index: number) => {
    setSelectedLocation(index);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* 3D Background */}
      <div className="background-3d">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow px-4">
            Have questions about our turfs or need help with bookings? We're here to help you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-maroon-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-maroon-600 text-white py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-maroon-600 bg-maroon-50 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-maroon-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-maroon-600 hover:text-maroon-700 font-medium inline-flex items-center mt-2"
                        >
                          {info.title === "Phone" && "Call Now"}
                          {info.title === "Email" && "Send Email"}
                          {info.title === "Head Office" && "Get Directions"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Locations Section with Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 text-shadow">Our Locations</h2>
          
          {/* Location Dropdown */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white rounded-xl shadow-lg p-4 flex items-center justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-maroon-600" />
                  <span className="font-semibold text-maroon-900">{locations[selectedLocation].name}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-maroon-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-64 overflow-y-auto z-10"
                >
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleLocationSelect(index)}
                      className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 ${
                        index === selectedLocation ? 'bg-maroon-50 text-maroon-900' : 'text-gray-700'
                      } ${index !== locations.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{location.address}</div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Selected Location Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-maroon-900 mb-4">{locations[selectedLocation].name}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <span className="text-gray-600">{locations[selectedLocation].address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">{locations[selectedLocation].phone}</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href={locations[selectedLocation].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-maroon-600 text-white py-3 px-4 rounded-lg text-center hover:bg-maroon-700 transition-colors duration-300"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${locations[selectedLocation].phone}`}
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg text-center hover:bg-green-700 transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Dynamic Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video h-64 lg:h-full">
                <iframe
                  key={selectedLocation}
                  src={locations[selectedLocation].embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${locations[selectedLocation].name} Location Map`}
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;