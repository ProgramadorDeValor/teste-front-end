<template>
  <v-container>
    <v-row justify="center" align="center" style="max-width: 600px;" />
    <v-row justify="center" class="my-2">
      <v-col cols="12" align="center">
        <v-card
          max-width="600"
          flat
        >
          <v-container>
            <v-row align="center">
              <v-col cols="2" align="start" class="pl-0">
                <v-btn icon outlined tile>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" align="left" class="pl-0">
                <h1>Titulo do Video</h1>
              </v-col>
            </v-row>
            <v-row class="my-2">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              />
            </v-row>
            <v-row align="center" class="py-5 justify-space-between">
              <v-col cols="6" class="pl-0">
                <h3 class="d-flex text--align-left">
                  Nome do Canal
                </h3>
              </v-col>
              <v-col cols="6" class="pr-0">
                <v-row no-gutters class="d-flex justify-end">
                  <v-col cols="3" class="mr-4">
                    <icon-number color="primary" number="9999" icon="mdi-thumb-up" />
                  </v-col>
                  <v-col cols="3" class="pr-0">
                    <icon-number color="red" number="9999" icon="mdi-thumb-down" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="pb-10">
              <p class="text-justify">
                Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.

                Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!

                Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?

                Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?
              </p>
            </v-row>
            <v-row>
              <icon-number color="primary" number="9999" icon="mdi-eye" />
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>

</style>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { VideoItem } from '~/types/Youtube/Interfaces/Youtube'
import IconNumber from '~/components/IconNumber'

@Component({
  components: {
    IconNumber
  }
})
export default class VideoDetailCard extends Vue {
  @Prop({ required: true }) readonly item!: Item

  // Computed
  get itemTitle () {
    return this.item.snippet.title ? this.item.snippet.title : 'Sem Titulo'
  }

  get itemChannel () {
    return this.item.snippet.channelTitle ? this.item.snippet.channelTitle : 'Sem Canal'
  }

  get itemDescription () {
    return this.item.snippet.description ? this.item.snippet.description : ''
  }

  get itemImage () {
    return this.item.snippet.thumbnails.default.url ? this.item.snippet.thumbnails.high.url : ''
  }
}
</script>
