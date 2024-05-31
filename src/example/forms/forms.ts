import Forms from '@flexvue/forms';


const onReady = () : void =>
{
    new Forms('#thePostForm').doSubmit( (form_params: { [key: string]: string }) =>
    {
        Log.d(form_params);

        document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(form_params,null,2);
    });
};

// document ready
(new App()).setLanguages([]).setResoures(import.meta.url).run(onReady);
