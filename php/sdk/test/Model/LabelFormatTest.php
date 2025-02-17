<?php
/**
 * LabelFormatTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\easyship\v2022_03_23\LabelFormat;

/**
 * LabelFormatTest Class Doc Comment
 *
 * @category    Class
 * @description The file format in which the shipping label will be created.
 * @package     SpApi
 */
class LabelFormatTest extends TestCase
{

    private LabelFormat $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelFormat();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelFormat"
     */
    public function testLabelFormat()
    {
        $this->assertInstanceOf(LabelFormat::class, $this->model);
    }
}
