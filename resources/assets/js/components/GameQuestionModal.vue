<template>
    <div ref="modal" class="modal fade" tabindex="-1" role="dialog" v-on:click.self="close()" @keyup.esc="close()">
        <div class="modal-dialog modal-lg sz-game-question" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" v-on:click="close()" v-bind:diabled="inAjaxCall"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ title() }}</h4>
                </div>
                <div class="modal-body">
                    <div v-if="hasImage()">
                        <img src="" class="img-responsive" alt="image" v-bind:src="image()">
                    </div>
                    <p class="sz-display-new-lines">{{ description() }}</p>

                    <div v-if="isOneCorrectAnswer()">
                        <ul class="media-list sz-one-correct-answer">
                            <li class="media" v-for="(option, index) in options()" v-on:click="triggerOptionClick(index)">
                                <div class="media-left" v-if="option.image_url">
                                    <img v-bind:src="option.image_url" class="media-object" alt="option-image">
                                </div>

                                <div class="media-body media-middle">
                                    <h4 class="media-heading" v-bind:class="{ selected: isAnswered() && isSelectedOption(option.id) }">{{ option.option }}</h4>
                                </div>

                                <div class="media-right media-middle">
                                    <input type="radio" name="option" class="form-control" v-model="selectedOptions" v-bind:value="option.id" ref="option">
                                    <i class="mdi mdi-radiobox-blank" v-if="!isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi mdi-radiobox-marked" v-if="isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi" v-bind:class="optionIconClass(option)" aria-hidden="true" v-if="isAnswered()"></i>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div v-if="isMultipleCorrectAnswers()">
                        <ul class="media-list sz-multiple-correct-answers">
                            <li class="media" v-for="(option, index) in options()" v-on:click="triggerOptionClick(index)">
                                <div class="media-left" v-if="option.image_url">
                                    <img v-bind:src="option.image_url" class="media-object" alt="option-image">
                                </div>

                                <div class="media-body media-middle">
                                    <h4 class="media-heading" v-bind:class="{ selected: isAnswered() && isSelectedOption(option.id) }">{{ option.option }}</h4>
                                </div>

                                <div class="media-right media-middle">
                                    <input type="checkbox" name="options[]" class="form-control" v-model="selectedOptions" v-bind:value="option.id" ref="option">
                                    <i class="mdi mdi-checkbox-blank-outline" v-if="!isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi mdi-checkbox-marked-outline" v-if="isSelectedOption(option.id) && !isAnswered()"></i>
                                    <i class="mdi" v-bind:class="optionIconClass(option)" aria-hidden="true" v-if="isAnswered()"></i>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div v-if="isFreeformAnswer()">
                        <div class="form-group">
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" v-model="textualAnswer" v-if="!isAnswered()"></textarea>
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" readonly="readonly" v-bind:value="answer.answer.text" v-if="isAnswered()"></textarea>
                        </div>
                    </div>

                    <div v-if="isMatchPairs()">
                        <div class="row sz-match-pairs">
                            <div class="col-xs-6">
                                <div class="row" v-for="pair in pairs()">
                                    <div class="col-xs-12">
                                        <div class="sz-matchable" v-on:click="choosePair(pair)" v-bind:class="{ 'chosen': isOptionChosen(pair), 'matched': isMatchedPair(pair) }" v-bind:style="matchableStyles" ref="matchable">
                                            <img v-if="pair.image_url" v-bind:src="pair.image_url" class="media-object" alt="pair-image">
                                            <div>{{ pair.option }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-6">
                                <div class="row" v-for="pair in pairs(true)">
                                    <div class="col-xs-12">
                                        <div class="sz-matchable" v-on:click="choosePairMatch(pair)" v-bind:class="{ 'chosen': isOptionMatchChosen(pair), 'matched': isMatchedPair(pair) }" v-bind:style="matchableStyles" ref="matchable">
                                            <img v-if="pair.image_match_url" v-bind:src="pair.image_match_url" class="media-object" alt="pair-image">
                                            <div>{{ pair.option_match }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="isEmbeddedContent()">
                        <div class="embed-responsive embed-responsive-16by9" v-html="embeddedContent()"></div>

                        <div class="form-group">
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" v-model="textualAnswer" v-if="!isAnswered()"></textarea>
                            <textarea class="form-control" v-bind:placeholder="$t('textual-answer-placeholder')" readonly="readonly" v-bind:value="answer.answer.text" v-if="isAnswered()"></textarea>
                        </div>
                    </div>

                    <div v-if="isPhoto() && !isAnswered()" class="sz-photo">
                        <transition name="fade-in-down-out-up" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                            <div class="alert alert-danger text-center" role="alert" v-show="incorrectImageFormat">
                                {{ $t('image-format-hint' )}}
                            </div>
                        </transition>

                        <div class="row text-center">
                            <a href="#" class="btn sz-take-image" tabindex="-1" v-on:click.prevent="triggerImageClick()" v-show="!hasImageSelected">
                                <i class="mdi mdi-camera" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="row" v-show="hasImageSelected">
                            <div class="col-xs-10 col-xs-offset-1">
                                <img v-bind:src="imageSrc" alt="uploadable-image" class="img-responsive center-block sz-image-taken" v-on:click.prevent="triggerImageClick()">
                            </div>
                        </div>
                        <input type="file" accept="image/jpeg, image/png" capture="camera" name="image" ref="image" v-on:change="imageSelected">
                    </div>

                    <div v-if="isPhoto() && isAnswered()" class="sz-photo">
                        <img v-bind:src="answer.image" alt="uploaded-image" class="img-responsive center-block sz-image-taken" v-if="isAnswered()">
                    </div>
                </div>

                <div class="modal-footer">
                    <a href="" v-bind:href="readMore()" target="_blank" class="btn btn-default" v-if="hasReadMore()">
                        <i class="mdi mdi-open-in-new" aria-hidden="true"></i>
                        {{ $t('read-more-about') }}
                    </a>
                    <button type="button" class="btn btn-default" v-on:click="close()" v-bind:disabled="inAjaxCall" v-bind:title="$t('close')">
                        <i class="mdi mdi-close"></i>
                    </button>
                    <button type="button" class="btn btn-primary" v-bind:disabled="!canSubmit() || inAjaxCall" v-on:click="submit()" v-bind:title="$t('submit')" v-if="!(isPreview || isAnswered())">
                        <i class="mdi mdi-send"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageMixin from './../mixins/Image.js'

    export default {
        props: ['question', 'answer', 'gameId', 'baseUrl', 'isPreview'],
        mixins: [ImageMixin],
        mounted() {
            var vm = this;

            this.$nextTick(() => {
                $(this.$refs.modal).on('hide.bs.modal', e => {
                    if ( vm.inAjaxCall ) {
                        e.preventDefault();
                    }
                });
            });
        },
        data() {
            return {
                selectedOptions: [],
                textualAnswer: '',
                hasImageSelected: false,
                imageSrc: null,
                chosenPair: {
                    option: null,
                    match: null
                },
                matchedPairs: [],
                shuffledPairs: [],
                matchableStyles: {
                    'min-height': '100px'
                },
                inAjaxCall: false,
                incorrectImageFormat: false
            };
        },
        methods: {
            open() {
                this.$nextTick(() => {
                    if ( this.isMatchPairs() ) {
                        if ( this.pairs().length > 0 ) {
                            if ( !this.isAnswered() ) {
                                this.question.pairs = _.shuffle(this.pairs());
                            }

                            // TODO This produces a small visible size change,
                            // might make sense to display things as invisible (not hidden)
                            // do the resize and only then show
                            $(this.$refs.modal).one('shown.bs.modal', e => {
                                var vm = this;
                                var heights = _.map(this.$refs.matchable, (matchable) => {
                                    return $(matchable).outerHeight(true);
                                });
                                var highest = _.max(heights);

                                if ( highest ) {
                                    vm.matchableStyles['min-height'] = highest + 'px';
                                }
                            });
                        }
                        if ( !this.isAnswered() ) {
                            this.shuffledPairs = _.shuffle(this.pairs());
                        } else {
                            this.shuffledPairs = this.pairs();
                        }
                    } else if ( this.isOneCorrectAnswer() || this.isMultipleCorrectAnswers() ) {
                        if ( this.options().length > 0 ) {
                            this.question.options = _.shuffle(this.options());
                        }
                    }

                    $(this.$refs.modal).modal('show');
                });

                return $(this.$refs.modal);
            },
            close() {
                if ( this.inAjaxCall ) return;

                this.$nextTick(() => {
                    $(this.$refs.modal).modal('hide');

                    this.selectedOptions = [];
                    this.textualAnswer = '';
                    this.hasImageSelected = false;
                    this.imageSrc = null;
                    this.chosenPair.option = null;
                    this.chosenPair.mathc = null;
                    this.matchedPairs = [];
                    this.shuffledPairs = [];
                    this.matchableStyles['min-height'] = '100px';
                    this.inAjaxCall = false;
                    $(this.$refs.image).val('');
                    this.incorrectImageFormat = false;
                });
            },
            submit() {
                if ( this.inAjaxCall ) return;

                var vm = this;

                this.inAjaxCall = true;

                var data = {
                    'game_id': this.gameId,
                    'question_id': this.question.id,
                };

                if ( this.isOneCorrectAnswer() || this.isMultipleCorrectAnswers() ) {
                    data.options = this.selectedOptions;
                } else if ( this.isFreeformAnswer() || this.isEmbeddedContent() ) {
                    data.text = this.textualAnswer;
                }

                if ( this.isPhoto() ) {
                    var formData = new FormData();

                    _.each(data, (item, key) => {
                        formData.append(key, item);
                    });

                    formData.append('image', this.$refs.image.files[0]);

                    data = formData;
                }

                this.$http.post(vm.baseUrl + '/api/games/answer', data).then(response => {
                    vm.inAjaxCall = false;

                    vm.$parent.openImageDialog(vm.question.id, response.body);

                    vm.close();
                }, response => {
                    vm.inAjaxCall = false;
                    console.error('Error', response);
                    // TODO Might need to notify user abut the error
                });
            },
            title() {
                return this.question ? this.question.title : '';
            },
            description() {
                return this.question ? this.question.description : '';
            },
            hasImage() {
                return this.question && this.question.image_url;
            },
            image() {
                return this.question ? this.question.image_url : '';
            },
            embeddedContent() {
                return this.question ? this.question.embedded_content : '';
            },
            hasReadMore() {
                return this.question && this.question.read_more;
            },
            readMore() {
                return this.question ? this.question.read_more : '';
            },
            options() {
                return ( this.question && this.question.options ) ? this.question.options : [];
            },
            pairs(shuffled) {
                if ( shuffled === true ) {
                    return this.shuffledPairs;
                }

                return ( this.question && this.question.pairs ) ? this.question.pairs : [];
            },
            isInformation() {
                return this.question ? this.question.type == 1 : false;
            },
            isOneCorrectAnswer() {
                return this.question ? this.question.type == 2 : false;
            },
            isMultipleCorrectAnswers() {
                return this.question ? this.question.type == 3 : false;
            },
            isFreeformAnswer() {
                return this.question ? this.question.type == 4 : false;
            },
            isMatchPairs() {
                return this.question ? this.question.type == 5 : false;
            },
            isEmbeddedContent() {
                return this.question ? this.question.type == 6 : false;
            },
            isPhoto() {
                return this.question ? this.question.type == 7 : false;
            },
            isSelectedOption(id) {
                let options;

                if ( !this.isAnswered() ) {
                    options = this.selectedOptions;
                } else {
                    options = this.answer.answer.options;
                }

                if ( options && typeof options === 'object' ) {
                    return options.indexOf(id) !== -1;
                }

                return options === id;
            },
            triggerOptionClick(index) {
                if ( !this.isAnswered() ) {
                    $(this.$refs['option'][index]).trigger('click');
                }
            },
            triggerImageClick() {
                $(this.$refs.image).trigger('click');
            },
            imageSelected(event) {
                if ( event.target.files.length > 0 ) {
                    var file = event.target.files[0];

                    if ( !this.isValidImageFormat(file) ) {
                        $(event.target).val('');
                        this.hasImageSelected = false;
                        this.incorrectImageFormat = true;
                        return;
                    }

                    if ( window.FileReader ) {
                        var reader = new FileReader(),
                            vm = this;

                        reader.onload = (e) => {
                            vm.imageSrc = e.target.result;
                        };

                        reader.readAsDataURL(file);
                    }

                    this.hasImageSelected = true;
                    this.incorrectImageFormat = false;
                }
            },
            canSubmit() {
                if ( this.isInformation() ) {
                    return true;
                } else if ( this.isOneCorrectAnswer() || this.isMultipleCorrectAnswers() ) {
                    if ( typeof this.selectedOptions === 'object' ) {
                        return this.selectedOptions.length > 0;
                    } else {
                        return !!this.selectedOptions;
                    }
                    return !!this.selectedOptions;
                } else if ( this.isFreeformAnswer() || this.isEmbeddedContent() ) {
                    return !!this.textualAnswer.trim();
                } else if ( this.isMatchPairs() ) {
                    return this.matchedPairs.length === this.pairs().length;
                } else if ( this.isPhoto() ) {
                    return this.hasImageSelected;
                }

                return false;
            },
            resetChosenPair() {
                this.$nextTick(() => {
                    var vm = this;
                    setTimeout(() => {
                        vm.chosenPair.option = null;
                        vm.chosenPair.match = null;
                    }, 250);
                });
            },
            choose(type, pair) {
                if ( this.isMatchedPair(pair) ) {
                    return;
                }

                this.chosenPair[type] = pair.id;

                if ( this.chosenPair.option === this.chosenPair.match ) {
                    this.matchedPairs.push(pair.id);
                    this.resetChosenPair();
                } else if ( this.chosenPair.option !== null && this.chosenPair.match !== null ) {
                    this.resetChosenPair();
                }
            },
            choosePair(pair) {
                this.choose('option', pair);
            },
            choosePairMatch(pair) {
                this.choose('match', pair);
            },
            isOptionChosen(pair) {
                return this.chosenPair.option === pair.id;
            },
            isOptionMatchChosen(pair) {
                return this.chosenPair.match === pair.id;
            },
            isMatchedPair(pair) {
                if ( this.isAnswered() ) {
                    return true;
                }
                return this.matchedPairs.indexOf(pair.id) !== -1;
            },
            isAnswered() {
                return !!this.answer;
            },
            isCorrectOption(option) {
                return !!option.correct;
            },
            optionIconClass(option) {
                const classes = [];
                const isCorrect = this.isCorrectOption(option);
                const isChosen = this.isSelectedOption(option.id);

                if ( isChosen ) {
                    if ( isCorrect ) {
                        classes.push('correct');
                    } else {
                        classes.push('incorrect');
                    }
                }

                if ( this.isOneCorrectAnswer() ) {
                    if ( isCorrect ) {
                        classes.push('mdi-checkbox-marked-circle-outline');
                    } else {
                        classes.push('mdi-close-circle-outline');
                    }
                } else if ( this.isMultipleCorrectAnswers() ) {
                    if ( isCorrect ) {
                        classes.push('mdi-checkbox-marked-outline');
                    } else {
                        classes.push('mdi-close-box-outline');
                    }
                }

                return classes;
            }
        }
    }
</script>
