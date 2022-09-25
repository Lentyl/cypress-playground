//TODO: https://docs.cypress.io/api/commands/fixture
export default class TestData {
    full_name = 'Mariusz Podgorski';
    first_names = [
        'Mariusz',
        'Marek',
        'Robert',
        'Marcin',
        'Przemek',
        'Adam',
        'Grzegorz',
        'Adrian',
        'Piotr',
        'Paweł'];
    last_names = [
        'Podgorski',
        'Pawłowski',
        'Kowalski',
        'Marcinkiewicz',
        'Macierewicz',
        'Tyszka',
        'Duda',
        'Kornhauzer',
        'Goldfinger',
        'Wiśniewski',
        'Lewandowski',
    ];
    department = [
        'Production',
        'Sale',
        'supply',
        'warehouse',
        'management',
        'bookkeeping',
        'HR'
    ];
    email = 'mar84@wp.pl';
    current_address = 'Kazimierza wielkiego 99A/33, 09-100 Płońsk';
    premanent_address = 'Kopernika 88G/45, 88-170 Warszawa';
    telephone_number = '1234567890';
    date_of_birth = '1985/01/05';
    year = '1985';
    month = 'January';
    subject = 'English';
    state = 'NCR';
    city = 'Delhi';
}