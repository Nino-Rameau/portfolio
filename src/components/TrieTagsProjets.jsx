function CategorieTag({ title, options, tagsSelectionnes, gestionClicTag }) {
  return (
    <details className="border rounded p-2">
      <summary className="font-semibold cursor-pointer text-black dark:text-white">{title}</summary>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(option => (
          <label key={option} className="flex items-center gap-1 text-sm text-black dark:text-white">
            <input
              type="checkbox"
              checked={tagsSelectionnes.includes(option)}
              onChange={() => gestionClicTag(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </details>
  );
}

export default CategorieTag;
