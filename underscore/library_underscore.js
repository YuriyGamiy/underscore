Работа с коллекциями (массивами или объектами)
each_.each(list, iteratee, [context]) Алиас: forEach
Проходит по всему списку элементов, вызывая для каждого из них функцию iteratee, которая будет вызвана в контексте context, если он был передан. При каждом вызове в iteratee будут переданы 3 аргумента: (element, index, list). В случае, если list является JavaScript-объектом, то в iteratee будут переданы (value, key, list). Возвращает list для цепочного вызова.

_.each([1, 2, 3], alert);
=> выведет через alert все цифры, по очереди...
_.each({one: 1, two: 2, three: 3}, alert);
=> выведет через alert все пары, по очереди...
Примечание: функции коллекций работают также на массивах, объектах и массиво-подобных структурах, таких как arguments, NodeList и аналогичные. Однако всё это опирается на "утиную типизацию", поэтому не работайте с объектами, имеющими числовое поле length. Также, стоит заметить, что цикл each нельзя прервать. В случае, если необходимо прерывание - используйте вместо него _.find.

map_.map(list, iteratee, [context]) Алиас: collect
Вернёт новый массив, полученный преобразованием каждого элемента list в функции (iteratee). Функция iteratee получает три аргумента: значение value, индекс index (или ключ key), и ссылку на весь список list.

_.map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]
_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
=> [3, 6, 9]
_.map([[1, 2], [3, 4]], _.first);
=> [1, 3]
reduce_.reduce(list, iteratee, [memo], [context]) Алиасы: inject, foldl
Также известная как inject или foldl, функция reduce объединяет в одно все значения из list. Memo хранит начальное состояние, и должна возвращаться функцией iteratee после каждого успешного шага вычислений. Функция iteratee получает четыре аргумента: memo, затем value и index (или key) итерации, и, последней, ссылку на весь list.

Если никакого значения memo не было передано при вызове reduce, функция iteratee не будет вызвана на первом элементе списка. Вместо этого, первый элемент будет использован в качестве начального состояния.

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6
reduceRight_.reduceRight(list, iteratee, memo, [context]) Алиас: foldr
Правоассоциативная версия reduce. Однако foldr не так полезен в JavaScript, как в языках с ленивыми вычислениями.

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
=> [4, 5, 2, 3, 0, 1]
find_.find(list, predicate, [context]) Алиас: detect
Вызывает для каждого элемента list функцию сравнения predicate, возвращая первый элемент, для которого predicate вернула true, или undefined, если ни один элемент не подошёл. Выполнение функции при этом прерывается, т.е. вызовов iterator для оставшейся части list не будет.

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> 2
filter_.filter(list, predicate, [context]) Алиас: select
Проходит через каждое значение list, возвращая массив всех значений, для которых predicate вернул true.

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]
where_.where(list, properties)
Вернёт массив из элементов list, для которых совпадают значения для соответсвующих ключей, перечисленные в properties.

_.where(listOfPlays, {author: "Shakespeare", year: 1611});
=> [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}]
findWhere_.findWhere(list, properties)
Сработает аналогично where, но вернёт только первый элемент, соответствующий заданным properties.

Если совпадений не найдено или list пустой, то вернёт undefined.

_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
=> {year: 1918, newsroom: "The New York Times",
  reason: "For its public service in publishing in full so many official reports,
  documents and speeches by European statesmen relating to the progress and
  conduct of the war."}
reject_.reject(list, predicate, [context])
Возвращает массив, содержащий все значения list, за исключением элементов, для которых функция predicate вернула значение true. Т.е. reject является «антонимом» filter.

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]
every_.every(list, [predicate], [context]) Алиас: all
Вернёт true, если для каждого значения из list predicate вернёт true. Прерывает обход списка как только обнаружит несоответствие.

_.every([2, 4, 5], function(num) { return num % 2 == 0; });
=> false
some_.some(list, [predicate], [context]) Алиас: any
Вернёт true, если хотя бы для одного значения из list predicate вернёт true. После нахождения первого удовлетворяющего условию элемента выполнение функции прерывается.

_.some([null, 0, 'yes', false]);
=> true
contains_.contains(list, value, [fromIndex]) Алиас: includes
Вернёт true, если в list содержится элемент, эквивалентный value. Для сравнения используется оператор ===. Если list является массивом, будет вызван метод indexOf. Используйте fromIndex, чтобы начать поиск с конкретного индекса.

_.contains([1, 2, 3], 3);
=> true
invoke_.invoke(list, methodName, *arguments)
Вызовет метод methodName на каждом значении list. Все дополнительные аргументы, если они переданы в invoke, будут также переданы при вызове methodName.

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
=> [[1, 5, 7], [1, 2, 3]]
pluck_.pluck(list, propertyName)
Краткий алиас для одного из наиболее частых применений функции map: вернёт массив, состоящий из значений свойства propertyName каждого из элементов list.

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
max_.max(list, [iteratee], [context])
Вернёт максимальное значение из list. Если был передан iteratee, то он будет использован для генерация критерия, по которому будет проведено сравнение. Если список пуст, будет возвращено -Infinity. Поэтому используйте isEmpty для проверки. Не-числовые элементы list будут пропущены.

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.max(stooges, function(stooge){ return stooge.age; });
=> {name: 'curly', age: 60};
min_.min(list, [iteratee], [context])
Вернёт минимальное значение из list. Если был передан iteratee, то он будет использован для генерации критерия, по которому будет проведено сравнение. Если список пуст, будет возвращено Infinity. Поэтому используйте isEmpty для проверки. Не-числовые элементы list будут пропущены.

var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
=> 2
sortBy_.sortBy(list, iteratee, [context])
Возвращает копию списка, отсортированную по возрастанию значений, которые возвращает функция iteratee, вызываемая на каждом элементе списка. Параметр iteratee может также быть названием поля, по которому должна вестить сортировка (например length).

_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
=> [5, 4, 6, 3, 1, 2]

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.sortBy(stooges, 'name');
=> [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
groupBy_.groupBy(list, iteratee, [context])
Разделяет коллекцию на группы, объединённые по результатам вызова функции iteratee на каждом элементе коллекции. Если параметр iteratee содержит строку с названием поля, коллекция будет сгруппирована по значениям этого поля в элементах.

_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
=> {1: [1.3], 2: [2.1, 2.4]}

_.groupBy(['one', 'two', 'three'], 'length');
=> {3: ["one", "two"], 5: ["three"]}
indexBy_.indexBy(list, iteratee, [context])
На вход получает коллекцию list и iteratee - функцию, которая возвращает ключ для каждого элемента коллекции (либо имя свойства), вернёт объект из пар индекс : соответствующий ему объект. Т.е. работает аналогично groupBy, но для случаев, когда индексы уникальны.

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.indexBy(stooges, 'age');
=> {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50},
  "60": {name: 'curly', age: 60}
}
countBy_.countBy(list, iteratee, [context])
Сортирует коллекцию в группы и возвращает количество объектов в каждой группе. Т.е. работает аналогично groupBy, но возвращает количество элементов вместо самой группы.

_.countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
shuffle_.shuffle(list)
Вернет перемешанную копию list, используя метод случайного перемешивания Фишера-Ятса.

_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]
sample_.sample(list, [n])
Возвращает n случайных элементов из list. Если аргумент n не был передан, вернёт один элемент.

_.sample([1, 2, 3, 4, 5, 6]);
=> 4

_.sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
toArray_.toArray(list)
Сконвертирует list в массив. Удобен, например, для преобразования объекта arguments.

(function(){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
=> [2, 3, 4]
size_.size(list)
Вернёт количество элементов в list.

_.size({one: 1, two: 2, three: 3});
=> 3
partition_.partition(array, predicate)
Разобъёт массив array на две части: одна - для элементов которой функция predicate вернёт true, и другая - для всех остальных.

_.partition([0, 1, 2, 3, 4, 5], isOdd);
=> [[1, 3, 5], [0, 2, 4]]
Функции для работы с массивами
На заметку: Все описанные ниже функции кроме массивов также будут работать с объектом arguments. Тем не менее, функции Underscore не предназначены для работы с "разреженными" массивами (элементы которых идут не подряд).

first_.first(array, [n]) Алиасы: head, take
Возвращает первый элемент массива. Если передать n, вернёт n элементов с начала.

_.first([5, 4, 3, 2, 1]);
=> 5
initial_.initial(array, [n])
Вернёт весь массив, кроме последнего элемента. (Особенно полезно для объекта arguments). Передайте параметр n, чтобы исключить больше одного элемента с конца.

_.initial([5, 4, 3, 2, 1]);
=> [5, 4, 3, 2]
last_.last(array, [n])
Возвращает последний элемент массива. Если был задан параметр n - вернёт n последних элементов.

_.last([5, 4, 3, 2, 1]);
=> 1
rest_.rest(array, [index]) Алиасы: tail, drop
Возвращает все элементы массива, кроме первого. Передайте агрумент index чтобы отбросить больше элементов с начала (до index).

_.rest([5, 4, 3, 2, 1]);
=> [4, 3, 2, 1]
compact_.compact(array)
Возвращает копию массива, без всех "ложных" значений. В JavaScript "ложными" считаются false, null, 0, "", undefined и NaN.

_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
flatten_.flatten(array, [shallow])
"Выравнивает" вложенные массивы (любого уровня вложенности), склеивая в одноуровневый массив. Если передать флаг shallow, выровняет только один уровень.

_.flatten([1, [2], [3, [[4]]]]);
=> [1, 2, 3, 4];

_.flatten([1, [2], [3, [[4]]]], true);
=> [1, 2, 3, [[4]]];
without_.without(array, *values)
Возвращает копию массива, в которой удалены все значения values. Для сравнения будет использован оператор ===.

_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
=> [2, 3, 4]
union_.union(*arrays)
Объединит уникальные элементы всех массивов arrays. Порядок элементов будет определён порядком их появления в исходных массивах.

_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=> [1, 2, 3, 101, 10]
intersection_.intersection(*arrays)
Вернёт массив из элементов, встречающихся в каждом из переданных массивов.

_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=> [1, 2]
difference_.difference(array, *others)
Идентичен without, с той разницей, что значения, которые необходимо исключить, передаются в виде массивов other.

_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=> [1, 3, 4]
uniq_.uniq(array, [isSorted], [iteratee]) Алиас: unique
Вернёт версию массива array, состоящую только из уникальных элементов. Для сравнения объектов используется оператор ===. То есть, для одинаковых элементов, будет сохранено только первое вхождение. Если array был предварительно отсортирован, то это стоит указать, передав true в качестве isSorted, т.к. это значительно повлияет на скорость работы алгоритма. Если Вы желаете определить уникальность элементов после неких преобразований, то задайте функцию iteratee, которая их выполнит.

_.uniq([1, 2, 1, 4, 1, 3]);
=> [1, 2, 4, 3]
zip_.zip(*arrays)
Вернёт массив, каждым элементом которого будет массив, содержащий элементы всех переданных массивов (arrays), расположенные на соответствующих позициях. При работе с матрицами zip.apply может быть использован для их транспонирования.

_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

unzip_.unzip(array)
Противоположность zip. Получив массив массивов array, вернёт несколько отдельных массивов, первый из которых будет содержать все первые элементы, второй - все вторые и так далее.

_.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
=> [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
object_.object(list, [values])
Сконвертирует массивы в объекты. Получает на вход массивы формата [key, value] (тогда действие будет противоположным функции pairs) или отдельно массив ключей и массив значений. Если ключи дублируются, последнее значение будет результирующим.

_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
=> {moe: 30, larry: 40, curly: 50}

_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
=> {moe: 30, larry: 40, curly: 50}
indexOf_.indexOf(array, value, [isSorted])
Вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден. Если Вы работаете с большим массивом и знаете, что он был предварительно отсортирован, то укажите это, передав true для isSorted. В таком случае будет использован бинарный поиск, который значительно быстрее перебора. Либо передайте в качетсве третьего аргумента числовой индекс - чтобы произвести поиск начиная с этого индекса.

_.indexOf([1, 2, 3], 2);
=> 1
lastIndexOf_.lastIndexOf(array, value, [fromIndex])
Вернёт позицию последнего вхождения элемента value в массиве array, или -1, если данный элемент не был найден. Если передать аргумент fromIndex, поиск будет вестить с этой позиции.

_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
=> 4
sortedIndex_.sortedIndex(list, value, [iteratee], [context])
Использует бинарный поиск, чтобы определить позицию, куда value должен быть вставлен, чтобы не нарушился порядок отсортированного list. Если был передан iteratee, он будет использован для вычисления ранга при сортировке каждого из элементов list. Итератор также может быть строкой, т.е. именем свойства, по которому будет проведена сортировка.

_.sortedIndex([10, 20, 30, 40, 50], 35);
=> 3

var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
_.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
=> 1
findIndex_.findIndex(array, predicate, [context])
Так же как и _.indexOf, возвращает первый индекс того значения, для которого predicate вернёт true. Если такой элемент не был найден, вернёт -1.

_.findIndex([4, 6, 8, 12], isPrime);
=> -1 // не найден
_.findIndex([4, 6, 7, 12], isPrime);
=> 2
findLastIndex_.findLastIndex(array, predicate, [context])
Аналогично _.findIndex, но проходит массив в оратном порядке, возвращая индекс ближайший к концу, для которого функция predicate вернёт true.

var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=> 3
range_.range([start], stop, [step])
Удобная функция для создания наборов целых чисел, позволяющая их гибкую конфигурацию. Часто используется вместе с each и map. Аргумент start, если не передан, по умолчанию будет установлен в 0; step — в 1. Возвращаемый набор будет представлять из себя числа в интервале от start (включительно) до stop, каждое последующее из которых будет увеличено (или уменьшено) относительно предыдущего на step. На заметку: если значение stop будет меньше start, функция вернёт список нулевой длины. Для итерации в обратном порядке используйте отрицательные значения step.

_.range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_.range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
_.range(0, -10, -1);
=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
_.range(0);
=> []
Работа с функциями
bind_.bind(function, object, *arguments)
Связывает функцию function с объектом object. Это значит, что каждый раз когда она будет вызвана, this будет указывать на object. Кроме того, можно задать значения параметров по умолчанию - для этого задайте их в arguments. Данный приём называется каррингом. Для карринга без связывания, используйте partial.

var func = function(greeting){ return greeting + ': ' + this.name };
func = _.bind(func, {name: 'moe'}, 'hi');
func();
=> 'hi: moe'
bindAll_.bindAll(object, *methodNames)
Свяжет с объектом object все методы, переданные как methodNames. Весьма полезно использовать при работе с обработчиками событий. Должен быть передан хотя бы один параметр methodNames.

var buttonView = {
  label  : 'underscore',
  onClick: function(){ alert('clicked: ' + this.label); },
  onHover: function(){ console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView, 'onClick', 'onHover');
// Когда кнопка будет нажата, в this.label будет записано корректное значение.
jQuery('#underscore_button').on('click', buttonView.onClick);
partial_.partial(function, *arguments)
Частично применяет функцию, "заполняя" любое число её аргументов переданными значениями arguments. Похожа на bind, но не изменяет значение this функции (не связывает контекст). Вы можете передать _ в качестве любого аргумента, чтобы пропустить его, не заполняя (он будет заполнен в обычном порядке, при вызове функции).

var subtract = function(a, b) { return b - a; };
sub5 = _.partial(subtract, 5);
sub5(20);
=> 15

// Используем пропуск агрумента
subFrom20 = _.partial(subtract, _, 20);
subFrom20(5);
=> 15
memoize_.memoize(function, [hashFunction])
Мемоизирует функцию function путём кэширования вычисленного значения. Полезно для ускорения медленных вычислений. Если задана hashFunction, она будет использована для вычисления хэш-ключа, который необходим для хранения результата. По умолчанию hashFunction использует первый аргумент мемоизированной функции в качестве ключа. Кэш мемоизированных значений доступен в поле cache полученной функции.

var fibonacci = _.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
delay_.delay(function, wait, *arguments)
Очень похожа на setTimeout. Вызовет function по прошествии заданного времени (wait) в миллисекундах. Если были заданы дополнительные аргументы arguments, они будут переданы в function при её вызове.

var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');
=> 'logged later' // Появляется через секунду.
defer_.defer(function, *arguments)
Откладывает вызов function до момента, пока не очистится текущий стек вызовов. Аналогична использованию setTimeout с задержкой равной 0. Полезна при затратных с точки зрения производительности вычислениях или рендеринге HTML, чтобы не «замораживать» пользовательский интерфейс на это время. Если были заданы дополнительные аргументы arguments, они будут переданы в function при её вызове.

_.defer(function(){ alert('deferred'); });
// Возврат значения происходит раньше, чем alert.
throttle_.throttle(function, wait, [options])
Вернёт версию функции, которая, при повторных вызовах, исполнится не чаще одного раза в заданный промежуток wait. Полезна для использования при обработке событий, которые происходят слишком часто.

По умолчанию throttle выполнит функцию, как только вы её вызовете (в первый раз) при последующих вызовах в течение wait выполняться она не будет. Если Вы хотите, чтобы при первоначальном вызове она не выполнялась – нужно передать {leading: false} в качестве options, а для отключения выполнения функции в конце - {trailing: false}.

var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
debounce_.debounce(function, wait, [immediate])
Вернёт версию функции, исполнение которой начнётся не ранее, чем истечёт промежуток wait, после её последнего вызова. Полезно для реализации логики, которая зависит от завершения действий пользователя. Например, проверить орфографию комментария пользователя лучше будет после того, как он его окончательно введёт, а динамечески перерассчитать разметку - после того, как пользователь закончит изменять размер окна.

По истечению интервала wait, функция будет вызвана с агрументами которые были переданы в самый последний раз.

Если передать true в качестве аргумента immediate, функция будет выполнена сразу, не дожидаясь прошествия wait. Полезно в случаях, когда нужно предотвратить случайные повторные действия, например, отправку формы.

var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
once_.once(function)
Вернёт функцию, которая может быть вызвана только один раз. Все последующие её вызовы будут возвращать значение, вычисленное в первый раз. Можно использовать для создания функций-инициализаторов, вместо того, чтобы объявлять флаг и проверять его каждый раз.

var initialize = _.once(createApplication);
initialize();
initialize();
// Application создаётся только один раз.
after_.after(count, function)
Вернёт копию функции, модифицированную таким образом, что она будет запущена только после того, как будет вызвана count раз. Удобно использовать при работе с асинхронными запросами, например, чтобы убедиться, что все обращения к серверу завершились. Если же указать count равным 0, то функция будет вызвана немедленно.

var renderNotes = _.after(notes.length, render);
_.each(notes, function(note) {
  note.asyncSave({success: renderNotes});
});
// renderNotes запускается только один раз, после того, как все заметки сохранены.
before_.before(count, function)
Создаёт версию функции, которая может быть вызвана не больше чем count раз. После этого результат последнего вызова кэшируется, и будет возвращаться для всех последующих вызовов.

var monthlyMeeting = _.before(3, askForRaise);
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
// результат всех последующих вызовов, будет таким же, как и для второго вызова
wrap_.wrap(function, wrapper)
Передаст функцию function в функцию wrapper, в качестве первого аргумента. Это позволит вызвать её из wrapper в любое удобное время в зависимости от условий, и выполнять какой-либо код до и после вызова.

var hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, function(func) {
  return "before, " + func("moe") + ", after";
});
hello();
=> 'before, hello: moe, after'
negate_.negate(predicate)
Возвращает инвертированный вариант логической функции predicate (функция, которая возвращает true или false).

var isFalsy = _.negate(Boolean);
_.find([-2, -1, 0, 1, 2], isFalsy);
=> 0
compose_.compose(*functions)
Вернёт функцию, скомпонованную из списка functions, таким образом, что каждая функция будет вызвана с аргументом, значение которого вычислено путём вызова следующей за ней функции. В терминах математики результатом композиции функций f(), g(), и h() будет следующее выражение: f(g(h())).

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome('moe');
=> 'hi: MOE!'
Работа с объектами
keys_.keys(object)
Возвращает все ключи объекта. (В случае массива - индексы.)

_.keys({one: 1, two: 2, three: 3});
=> ["one", "two", "three"]
allKeys_.allKeys(object)
Возвращает названия всех собственных и унаследованных полей объекта.

function Stooge(name) {
  this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge("Moe"));
=> ["name", "silly"]
values_.values(object)
Возвращает значения всех собственных полей объекта.

_.values({one: 1, two: 2, three: 3});
=> [1, 2, 3]
mapObject_.mapObject(object, iteratee, [context])
Как map, только для объектов. Преобразует поочерёдно значение каждого поля объекта.

_.mapObject({start: 5, end: 12}, function(val, key) {
  return val + 5;
});
=> {start: 10, end: 17}
pairs_.pairs(object)
Возвращает список пар [key, value] (ключ - значение) объекта. Действие противоположно функции object.

_.pairs({one: 1, two: 2, three: 3});
=> [["one", 1], ["two", 2], ["three", 3]]
invert_.invert(object)
Вернёт копию object где ключи — значения, а значения — ключи. Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально сериализованы в строки.

_.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
=> {Moses: "Moe", Louis: "Larry", Jerome: "Curly"};
create_.create(prototype, props)
Создаёт новый объект с заданным прототипом, опционально добавляя props в качестве собственных полей объекта. Своего рода Object.create, но без лишней возни с дескрипторами.

var moe = _.create(Stooge.prototype, {name: "Moe"});
functions_.functions(object) Алиас: methods
Возвращает отсортированный массив с названиями всех методов объекта.

_.functions(_);
=> ["all", "any", "bind", "bindAll", "clone", "compact", "compose" ...
findKey_.findKey(object, predicate, [context])
Похоже на _.findIndex, но для ключей объекта. Возвращает ключ key, для которого predicate возвращает true. Или undefined если такой ключ не был найден.

extend_.extend(destination, *sources)
Скопирует все свойства из объектов source в объект destination. Все вложенные объекты или массивы будут скопированы "по ссылке" (т.е. не создавая копий). Если объекты source имеют одноименные свойства, то значения каждого будет затёрто значениями из следующего.

_.extend({name: 'moe'}, {age: 50});
=> {name: 'moe', age: 50}
extendOwn_.extendOwn(destination, *sources) Алиас: assign
Как extend, но копирует только собственные значения объекта.

pick_.pick(object, *keys)
Возвращает копию объекта, содержащую только указанные ключи. Вместо ключей, можно указать функцию, определяющую, какие ключи оставить.

_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}
_.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
=> {age: 50}
omit_.omit(object, *keys)
Возвращает копию объекта без указанных ключей (или массива ключей). Вместо ключей, можно передать функцию, которая будет определять, какие ключи отбросить.

_.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
=> {name: 'moe', age: 50}
_.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
=> {name: 'moe', userid: 'moe1'}
defaults_.defaults(object, *defaults)
Проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из defaults. Если же какие-то свойства объекта уже определены, то они не будут изменены.

var iceCream = {flavor: "chocolate"};
_.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}
clone_.clone(object)
Вернёт клон object. Любые, входящие в его состав массивы или объекты будут скопированы по ссылке, а не продублированы.

_.clone({name: 'moe'});
=> {name: 'moe'};
tap_.tap(object, interceptor)
Вызовет interceptor с object в качестве аргумента и затем вернёт object. Основная задача данного метода — возможность «вклиниться» в цепочку вызовов для того, чтобы произвести некие операции с промежуточными итогами.

_.chain([1,2,3,200])
  .filter(function(num) { return num % 2 == 0; })
  .tap(alert)
  .map(function(num) { return num * num })
  .value();
=> // [2, 200] (alerted)
=> [4, 40000]
has_.has(object, key)
Проверяет, содержит ли объект указанный ключ. Идентично object.hasOwnProperty(key), но использует безопасную ссылку на функцию hasOwnProperty, на случай, если функция была случайно затёрта.

_.has({a: 1, b: 2, c: 3}, "b");
=> true
property_.property(key)
Возвращает функцию, которая вернёт ключ key любого переданого её объекта.

var stooge = {name: 'moe'};
'moe' === _.property('name')(stooge);
=> true
propertyOf_.propertyOf(object)
Обратно по действию функции _.property. Берёт объект, и возвращает функцию, которая будет возвращать значение любого переданного ключа, для этого объекта.

var stooge = {name: 'moe'};
_.propertyOf(stooge)('name');
=> 'moe'
matcher_.matcher(attrs) Алиас: matches
Вернёт логическую функцию, с помощью которой можно будет определить, обладает ли объект такими же полями-значениями как в attrs.

var ready = _.matcher({selected: true, visible: true});
var readyToGoList = _.filter(list, ready);
isEqual_.isEqual(object, other)
Выполняет оптимизированное "глубокое" сравнение двух объектов, чтобы определить их эквивалентность.

var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
=> false
_.isEqual(stooge, clone);
=> true
isMatch_.isMatch(object, properties)
Проверяет, содержатся ли ключи-значения properties в объекте.

var stooge = {name: 'moe', age: 32};
_.isMatch(stooge, {age: 32});
=> true
isEmpty_.isEmpty(object)
Вернёт true если коллекция object не содержит ни одного значения. Для строк и массивов _.isEmpty проверяет длину на равенство 0.

_.isEmpty([1, 2, 3]);
=> false
_.isEmpty({});
=> true
isElement_.isElement(object)
Вовращает true если object - элемент DOM.

_.isElement(jQuery('body')[0]);
=> true
isArray_.isArray(object)
Возвращает true если object - это массив.

(function(){ return _.isArray(arguments); })();
=> false
_.isArray([1,2,3]);
=> true
isObject_.isObject(value)
Возвращает true если value - это объект. Примите во внимание, что массивы и функции в JavaScript это тоже объекты, тогда как строки и числа - нет.

_.isObject({});
=> true
_.isObject(1);
=> false
isArguments_.isArguments(object)
Возвращает true если object это объект Arguments.

(function(){ return _.isArguments(arguments); })(1, 2, 3);
=> true
_.isArguments([1,2,3]);
=> false
isFunction_.isFunction(object)
Возвращает true если object это функция.

_.isFunction(alert);
=> true
isString_.isString(object)
Возвращает true если object это строка.

_.isString("moe");
=> true
isNumber_.isNumber(object)
Возвращает true если object это число (включая NaN).

_.isNumber(8.4 * 5);
=> true
isFinite_.isFinite(object)
Возвращает true если object это конечное число.

_.isFinite(-101);
=> true

_.isFinite(-Infinity);
=> false
isBoolean_.isBoolean(object)
Возвращает true если object это true или false.

_.isBoolean(null);
=> false
isDate_.isDate(object)
Возвращает true если object является датой (Date).

_.isDate(new Date());
=> true
isRegExp_.isRegExp(object)
Возвращает true если object это регулярное выражение (RegExp).

_.isRegExp(/moe/);
=> true
isError_.isError(object)
Возвращает true если object это объект унаследованный от Error.

try {
  throw new TypeError("Example");
} catch (o_O) {
  _.isError(o_O);
}
=> true
isSymbol_.isSymbol(object)
Возвращает true если object это символ (Symbol).

_.isSymbol(Symbol());
=> true
isNaN_.isNaN(object)
Возвращает true если object это NaN.
Примечание: это не тоже самое, что нативная функция isNaN, которая также возвращает true для многих не числовых значений, таких как undefined.

_.isNaN(NaN);
=> true
isNaN(undefined);
=> true
_.isNaN(undefined);
=> false
isNull_.isNull(object)
Возвращает true если значение object равно null.

_.isNull(null);
=> true
_.isNull(undefined);
=> false
isUndefined_.isUndefined(value)
Возвращает true если значение value равно undefined.

_.isUndefined(window.missingVariable);
=> true
Вспомогательные функции
noConflict_.noConflict()
Отвяжет переменную _ от объекта Underscore. Вернёт ссылку на объект Underscore.

var underscore = _.noConflict();
identity_.identity(value)
Вернёт значение, которое было передано в качестве аргумента. В математической терминологии f(x) = x
. Кажется бесполезным, но используется повсюду в Underscore в качестве дефолтного итератора.

var stooge = {name: 'moe'};
stooge === _.identity(stooge);
=> true
constant_.constant(value)
Вернёт функцию, которая всегда будет возвращать значение value.

var stooge = {name: 'moe'};
stooge === _.constant(stooge)();
=> true
noop_.noop()
Всегда возвращает undefined, вне зависимости от переданных аргументов. Полезна в качестве "заглушки" для опциональных обработчиков событий (callbacks).

obj.initialize = _.noop;
times_.times(n, iteratee, [context])
Вызывает функцию iteratee n раз. При каждом вызове, функции передается аргумент index.
Возвращает массив полученных значений.
Примечание: этот пример использует объектно-ориентированный синтаксис.

_(3).times(function(n){ genie.grantWishNumber(n); });
random_.random(min, max)
Возвращает случайное целое число, в диапазоне от min до max, включительно. Если вы передали только один агрумент, будет использован диапазон от 0 до переданного числа.

_.random(0, 100);
=> 42
mixin_.mixin(object)
Позволяет расширить Underscore вашими собственными функциями. Передайте таблицу с определениями функций, вида {name: function}, и они будут добавлены в глобальные объект Underscore, и его ООП враппер.
Возвращает объект Underscore, чтобы оставить возможность цепочного вызова.

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});
_("fabio").capitalize();
=> "Fabio"
iteratee_.iteratee(value, [context])
Генерирует callback, который может быть применён к каждому элементу коллекции. _.iteratee поддерживает набор сокращённых синтаксисов для типичных случаев. В зависимости от типа value, _.iteratee вернёт:

// Никакого значения
_.iteratee();
=> _.identity()

// Функция
_.iteratee(function(n) { return n * 2; });
=> function(n) { return n * 2; }

// Объект
_.iteratee({firstName: 'Chelsea'});
=> _.matcher({firstName: 'Chelsea'});

// Что-то другое
_.iteratee('firstName');
=> _.property('firstName');
Следующие функции Underscore, преобразуют свои предикаты с помощью _.iteratee: countBy, every, filter, find, findIndex, findKey, findLastIndex, groupBy, indexBy, map, mapObject, max, min, partition, reject, some, sortBy, sortedIndex, и uniq

Вы можете переопределить _.iteratee своей собственной функцией, если вы хотите внести дополнительные варианты синтаксиса:

// Поддержка `RegExp` предиката.
var builtinIteratee = _.iteratee;
_.iteratee = function(value, context) {
  if (_.isRegExp(value)) return function(obj) { return value.test(obj) };
  return builtinIteratee(value, context);
};
uniqueId_.uniqueId([prefix])
Генерирует абсолютно уникальные ID для модели или элемента DOM, на клиентской стороне. Если был передан prefix, ID будет добавлен к нему.

_.uniqueId('contact_');
=> 'contact_104'
escape_.escape(string)
Экранирует в строке символы &, <, >, ", `, и ', чтобы иметь возможность вставить её в HTML.

_.escape('Curly, Larry & Moe');
=> "Curly, Larry &amp; Moe"
unescape_.unescape(string)
Противоположность escape по действию. Заменяет &amp;, &lt;, &gt;, &quot;, &#96; и &#x27; их не-экранированными вариантами.

_.unescape('Curly, Larry &amp; Moe');
=> "Curly, Larry & Moe"
result_.result(object, property, [defaultValue])
Если property - функция, она будет вызвана с object в качестве контекста. Иначе - возвращена как результат. Если передано дефолтное значение defaultValue, а property - не существует или равно undefined, будет возвращено значение по умолчанию. Если defaultValue - это функция, то будет возвращён результат её выполнения.

var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
_.result(object, 'cheese');
=> "crumpets"
_.result(object, 'stuff');
=> "nonsense"
_.result(object, 'meat', 'ham');
=> "ham"
now_.now()
Возвращает целочисленное значение текущего времени (unix-time timestamp), используя самый быстрый из доступных методов. Полезно при реализации таймеров или анимаций.

_.now();
=> 1392066795351
template_.template(templateString, [settings])
Компилирует JavaScript шаблон в функцию, которая может быть вызвана для рендера этого шаблона. Полезно для отрисовки сложных фрагментов HTML на основе JSON данных. Функция template может интерполировать значения используя <%= … %>, и выполнять произвольный JavaScript код с помощью <% … %>. Если вы хотите интерполировать значение, при этом экранировав его, используйте <%- … %>. Когда вы выполняете функцию template, вы можете передать ей объект data. Его значения буду соответствовать одноимённым свободным переменным шаблона. Параметр settings должен быть таблицей, содержащей переопределённые настройки шаблонизатора _.templateSettings.

var compiled = _.template("hello: <%= name %>");
compiled({name: 'moe'});
=> "hello: moe"

var template = _.template("<b><%- value %></b>");
template({value: '<script>'});
=> "<b>&lt;script&gt;</b>"
Вы можете также использовать print из фрагментов JavaScript кода. Иногда это бывает удобнее чем использовать <%= ... %>.

var compiled = _.template("<% print('Hello ' + epithet); %>");
compiled({epithet: "stooge"});
=> "Hello stooge"
Если вам не нравятся символы, используемые для интерполяции и вставки кода в шаблон, вы можете изменить настройки шаблонизатора Underscore. Определите регулярное выражение interpolate для блоков интерполяции, выражение escape для последовательностей, которые должны быть экранированы, и evaluate для блоков кода. Вы можете определить одно или несколько из этих выражений, по желанию.
Например, чтобы использовать шаблоны в стиле Mustache.js:

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var template = _.template("Hello {{ name }}!");
template({name: "Mustache"});
=> "Hello Mustache!"
По умолчанию, template помещает значения из data в локальную область видимости с помощью оператора with. Но вы можете определить единое имя переменной через опцию variable. Это может существенно повысить скорость рендера шаблона.

_.template("Using 'with': <%= data.answer %>", {variable: 'data'})({answer: 'no'});
=> "Using 'with': no"
Прекомпиляция шаблона также может помочь при дебаге ошибок, которые сложно воспроизвести. Т.к. прекомпилированные шаблоны могут указать номер строки, и стектрейс ошибки - что невозможно при компиляции шаблона realtime на клиенте. Параметр source доступен из скомпилированного шаблона для облегчения прекомпиляции.

<script>
  JST.project = <%= _.template(jstText).source %>;
</script>
Объектно-Ориентированный стиль
Вы можете использовать Underscore как в функциональном, так и в объектно-ориентированном стиле. Эти две строки кода выполняют одну и ту же операцию: удвоение чисел в списке.

_.map([1, 2, 3], function(n){ return n * 2; });
_([1, 2, 3]).map(function(n){ return n * 2; });
Цепочные вызовы
Вызов chain приведёт к тому, что все последующие вызовы будут возвращать "обёрнутые" объекты. Когда вы закончите вычисления, вызовите value чтобы получить финальный результат. Вот пример объединения в одну "цепь" вызовов map/flatten/reduce, для того, чтобы подсчитать, сколько раз встречается каждое слово в стихотворении:

var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];

_.chain(lyrics)
  .map(function(line) { return line.words.split(' '); })
  .flatten()
  .reduce(function(counts, word) {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {})
  .value();

=> {lumberjack: 2, all: 4, night: 2 ... }
Кроме того, цепочка, сделанная из объекта Underscore, обладает всеми методами стандартного объекта Array. А это значит, что вы можете воспользоваться в цепочке методом reverse или push, и затем продолжить вычисления.

chain_.chain(obj)
Возвращает "обёрнутый" объект. Вызовы функций на нём также будут возвращать "обёрнутые" объекты, до тех пор, пока не будет вызван метод value.

var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
=> "moe is 21"
value_.chain(obj).value()
Извлекает значение из "обёрнутого" объекта.

_.chain([1, 2, 3]).reverse().value();
=> [3, 2, 1]
Ссылки и рекомендуемая литература
Underscore.lua, Lua-порт функций, которые доступны в обоих языках. Включает ООП-обёртки и цепочки. (источник)

Dollar.swift, Swift-порт большей части функций Underscore.js и многое другое. (источник)

Underscore.m, Objective-C-порт многих функций Underscore.js, использующий синтаксис, поощряющий цепочные вызовы. (источник)

_.m, альтернативный Objective-C-порт, который пытается держаться ближе к оригинальному Underscore.js API. (источник)

Underscore.php, PHP-порт функций, применимых в обоих языках. Построен на PHP 5.4 и сделан с учётом "data-type tolerance". (источник)

Underscore-perl, Perl-порт многих функций Underscore.js, нацеленный на хэши и массивы Perl. (источник)

Underscore.cfc, Coldfusion-порт многих функций Underscore.js. (источник)

Underscore.string, расширение Underscore, добавляющее функции манипуляции со строками: trim, startsWith, contains, capitalize, reverse, sprintf, и другие.

Underscore-java, порт на Java, функций, которые применимы в обоих языках. Включает ООП-обёртки и цепочные вызовы. (источник)

Модуль Enumerable для Ruby.

Prototype.js, который обеспечивает JavaScript коллекцией функций в манере, близкой к Enumerable в Ruby.

Функциональный JavaScript, Оливера Стила, который включает в себя комплексную поддержку функций более высокого порядка, а также строки лямбда.

Data.js, Майкла Ауфрайтера, data-манипуляции и persistence-библиотека для JavaScript.

itertools для Python.

PyToolz, Python-порт, расширяющий itertools и functools, чтобы включить многое из Underscore API.

Funcy, практичная коллекция функциональных методов для Python, частично вдохновлённая Underscore.