import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import foto from './assets/perfil.jpg';
import Icon, {Github} from 'react-native-vector-icons/Feather';
const colorText = '#2C3235';
const colorPage = '#CEDBDF';
const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert(
          'Meu linkedin',
          'https://www.linkedin.com/in/gustavo-silva69/',
        );
        break;
      case 'instagram':
        Alert.alert('Meu instagram', 'https://www.instagram.com/silv4br_/');
        break;
      case 'github':
        Alert.alert('Meu github', 'https://github.com/gustavosilvabr');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <Text style={style.texto}>PROJETO APP CURRICULO</Text>
        <View style={style.container_perfil}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Gustavo pereira</Text>
          <Text>Desenvolvedor front-end e mobile</Text>
          <View style={style.redesSociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} color={'#2C3235'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} color={'#2C3235'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={30} color={'#2C3235'} />
            </TouchableOpacity>
          </View>

          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_header_text}>
                Experiencia Profissional
              </Text>
              <Text style={style.card_header_text_p}>
              Já fiz alguns bootcamps, cursos e projetos, mas não possuo nenhuma experiencia Profissional.
              </Text>
            </View>
            <View style={style.card_content}></View>
          </View>

          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_header_text}>
              Formação acadêmica
              </Text>
              <Text style={style.card_header_text_p}>
              - Ensino médio: Completo
              </Text>
              <Text style={style.card_header_text_p}>
              - Ensino Superior: Cursando Analise e desenvolvimento de sistemas
              </Text>
              <Text style={style.card_header_text_p}>
               - Cursos: inglês, Programador Full-Stack e Bootcamps (Cursando) 
              </Text>
            </View>
            <View style={style.card_content}></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colorPage,
    alignItems: 'center',
  },
  texto: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    color: colorText,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },
  container_perfil: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colorText,
    marginTop: 15,
  },
  funcao: {
    color: colorText,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    paddingTop: 20,
  },
  card: {
    width: 399,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colorText,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  card_header_text: {
    color: colorText,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
  },
  card_header_text_p: {
    paddingTop:10,
    textAlign: 'justify',
    fontSize:14,
  },
});
