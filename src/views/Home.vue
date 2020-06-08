<template>
    <v-container>
        <v-row class="pt-4 flex-column">
            <v-col class="nf-calendar">
                <template>
                    <div class="main-calendar-right">
                        <p class="main-calendar-right-title">{{$t('Calendarcontrolledassignments')}}</p>
                        <span class="main-calendar-right-span">Meniki</span>
                    </div>
                    <v-row class="fill-height">
                        <v-col>
                            <v-sheet height="80">
                                <v-toolbar flat color="white">
                                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                                    <v-chip
                                            class="ma-2 text-uppercase"
                                            color="#0092c8"
                                            dark
                                    >
                                        Faqat ma’sul bo’lgan
                                    </v-chip>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                            </v-sheet>
                            <v-sheet height="450">
                                <v-calendar
                                        ref="calendar"
                                        v-model="focus"
                                        color="primary"
                                        :events="events"
                                        :event-color="getEventColor"
                                        @click:event="showEvent"
                                        @click:date="viewDay"
                                        @change="updateRange"
                                ></v-calendar>
                                <v-menu
                                        v-model="selectedOpen"
                                        :close-on-content-click="false"
                                        offset-x
                                >
                                    <v-card
                                            color="grey lighten-4"
                                            min-width="350px"
                                            flat
                                    >
                                        <v-toolbar
                                                :color="selectedEvent.color"
                                                dark
                                        >
                                            <v-btn icon>
                                                <v-icon>mdi-pencil</v-icon>
                                            </v-btn>
                                            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                            <v-spacer></v-spacer>

                                            <v-btn icon>
                                                <v-icon>mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </v-toolbar>
                                        <v-card-text>
<!--                                            <span v-html="selectedEvent.details"></span>-->


                                            <template>
                                                <v-data-table

                                                        :headers="headers"
                                                        :items="desserts"
                                                        :items-per-page="5"
                                                        class="elevation-1 nf-calendar-table"
                                                        hide-default-footer
                                                >
                                                    <template v-slot:item="{ item }">
                                                        <tr
                                                                :key="item.id"
                                                                @click="$router.push({name: 'chancellery-jurnal', params: {cardId: item.id}})"
                                                                class="tr-class">
                                                            <td>{{ item.id }}</td>
                                                            <td>{{ item.name }}</td>
                                                            <td>
                                                                {{ item.calories }}
                                                            </td>
                                                        </tr>
                                                    </template>
                                                </v-data-table>
                                            </template>
                                            <template>
                                                <div class="text-center">
                                                    <v-pagination
                                                            v-model="page"
                                                            :length="6"
                                                            class="mt-5"
                                                    ></v-pagination>
                                                </div>
                                            </template>

                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn
                                                    text
                                                    color="secondary"
                                                    @click="selectedOpen = false"
                                            >
                                                Cancel
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-menu>
                            </v-sheet>
                            <v-toolbar flat color="white">

                                <v-btn
                                        fab
                                        small
                                        absolute
                                        left
                                        color="primary"
                                        @click="prev"
                                >
                                    <v-icon dark>mdi-chevron-left</v-icon>
                                </v-btn>


                                <v-btn
                                        fab
                                        small
                                        absolute
                                        right
                                        color="primary"
                                        @click="$refs.calendar.next()"
                                >
                                    <v-icon dark>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-toolbar>

                        </v-col>
                    </v-row>
                </template>
            </v-col>
            <v-col class="nf-bg-color mt-2">
                <p class="main-calendar-right-title">Bo'limlar</p>

                <div class="main-calendar-right-blog-btn">
                    <button type="button" class="main-calendar-right-btn">
                        <span>
                            <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                                 class="left-bar-icon"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M632.5,802.5H177.7c-48.9,0-88.7-36.4-88.7-81.2V81.8  c0-44.8,39.8-81.1,88.7-81.1h190.6c-6.3,16.4-4.7,11.1-4.7,180.2c0,83.4,74.2,151.3,165.5,151.3c181.1,0,174.2,1.5,192.2-4.3v393.4  C721.2,766.1,681.4,802.5,632.5,802.5z M405.1,422.7c-58.3,0-105.5,47.2-105.5,105.5s47.2,105.5,105.5,105.5  c58.3,0,105.5-47.2,105.5-105.5S463.4,422.7,405.1,422.7z M693.8,282H529.1c-61,0-110.6-45.4-110.6-101.2V25.7  c0-22.4,29.9-33.6,47-17.6l247.9,231.2C730.4,255.2,718.1,282,693.8,282z"></path></svg>
                        </span>
                        <p>Mening hujjatlarim</p>
                    </button>
                    <button type="button" class="main-calendar-right-btn">
                        <span>
                            <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve" class="left-bar-icon"><path fill="#fff" d="M527.1,280.8h164.4c24.2,0,36.5-26.8,19.5-42.6L463.6,7.6c-17.1-16-46.9-4.9-46.9,17.5v154.8    C416.7,235.5,466.2,280.8,527.1,280.8z M527.1,330.8c-91,0-165.1-67.7-165.1-151c0-168.8-1.6-163.4,4.7-179.8H176.5    C127.7,0.1,88,36.4,88,81v638.1c0,44.7,39.7,81,88.5,81h453.8c48.8,0,88.5-36.3,88.5-81V326.6    C700.9,332.3,707.8,330.8,527.1,330.8z"></path></svg>
                        </span>
                        <p>Mening bo’limim hujjatlari</p>
                    </button>
                    <button type="button" class="main-calendar-right-btn">
                        <span><svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve" class="left-bar-icon"><path fill="#fff" d="M741,527.2c-32.6,0-59.1,26.2-59.1,58.5V677H118.7v-91.2c0-32.3-26.4-58.5-59.1-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7C0.5,767.8,27,794,59.6,794H741c32.6,0,59.1-26.2,59.1-58.5V585.7    C800,553.4,773.6,527.2,741,527.2z M382.5,589.5c9.8,9.7,25.8,9.7,35.7,0l207-205.1c6-6,7.8-15,4.6-22.8    c-3.3-7.8-10.9-12.9-19.5-12.9H513V53.1c0-25.2-20.6-45.7-46.1-45.7H333.7c-25.5,0-46.1,20.4-46.1,45.7v295.6h-97.2    c-8.5,0-16.2,5.1-19.5,12.9c-3.3,7.8-1.5,16.8,4.5,22.8L382.5,589.5z"></path></svg></span>
                        <p>Kelib tushgan</p>
                    </button>
                    <button type="button" class="main-calendar-right-btn">
                        <span><svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve" class="left-bar-icon"><path fill="#fff" d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"></path></svg></span>
                        <p>Murojaat</p>
                    </button>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            page: 1,
            focus: '',
            type: 'month',
            start: null,
            end: null,
            selectedEvent: {},
            // selectedElement: null,
            selectedOpen: false,
            events: [],
            colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
            names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
            headers: [
                {
                    text: '№', value: 'id'
                },
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {text: 'temp', value: 'calories'},
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
            ],
        }),
        computed: {
            title() {
                const {start, end} = this
                if (!start || !end) {
                    return ''
                }

                const startMonth = this.monthFormatter(start)
                const endMonth = this.monthFormatter(end)
                const suffixMonth = startMonth === endMonth ? '' : endMonth

                const startYear = start.year
                const endYear = end.year
                const suffixYear = startYear === endYear ? '' : endYear

                const startDay = start.day + this.nth(start.day)
                const endDay = end.day + this.nth(end.day)

                switch (this.type) {
                    case 'month':
                        return `${startMonth} ${startYear}`
                    case 'week':
                    case '4day':
                        return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
                    case 'day':
                        return `${startMonth} ${startDay} ${startYear}`
                }
                return ''
            },
            monthFormatter() {
                return this.$refs.calendar.getFormatter({
                    timeZone: 'UTC', month: 'long',
                })
            },
        },
        mounted() {
            this.$refs.calendar.checkChange()
        },
        methods: {
            viewDay({date}) {
                this.focus = date
                this.type = 'day'
            },
            getEventColor(event) {
                return event.color
            },
            setToday() {
                this.focus = this.today
            },
            prev() {
                this.$refs.calendar.prev()
            },
            next() {
                this.$refs.calendar.next()
            },
            showEvent({nativeEvent, event}) {
                const open = () => {
                    this.selectedEvent = event
                    this.selectedElement = nativeEvent.target
                    setTimeout(() => this.selectedOpen = true, 10)
                }

                if (this.selectedOpen) {
                    this.selectedOpen = false
                    setTimeout(open, 10)
                } else {
                    open()
                }
                nativeEvent.stopPropagation()
            },
            updateRange({start, end}) {
                const events = []

                const min = new Date(`${start.date}T00:00:00`)
                const max = new Date(`${end.date}T23:59:59`)
                const days = (max.getTime() - min.getTime()) / 86400000
                const eventCount = this.rnd(days, days + 20)

                for (let i = 0; i < eventCount; i++) {
                    const allDay = this.rnd(0, 3) === 0
                    const firstTimestamp = this.rnd(min.getTime(), max.getTime())
                    const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                    const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
                    const second = new Date(first.getTime() + secondTimestamp)

                    events.push({
                        name: this.names[this.rnd(0, this.names.length - 1)],
                        start: this.formatDate(first, !allDay),
                        end: this.formatDate(second, !allDay),
                        color: this.colors[this.rnd(0, this.colors.length - 1)],
                    })
                }

                this.start = start
                this.end = end
                this.events = events
            },
            nth(d) {
                return d > 3 && d < 21
                    ? 'th'
                    : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
            },
            rnd(a, b) {
                return Math.floor((b - a + 1) * Math.random()) + a
            },
            formatDate(a, withTime) {
                return withTime
                    ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
                    : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
            },
        },
    }
</script>

