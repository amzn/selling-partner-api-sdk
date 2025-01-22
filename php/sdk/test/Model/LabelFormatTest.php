<?php
/**
 * LabelFormatTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\easyship\LabelFormat;

/**
 * LabelFormatTest Class Doc Comment
 *
 * @category    Class
 * @description The file format in which the shipping label will be created.
 * @package     OpenAPI\Client
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
