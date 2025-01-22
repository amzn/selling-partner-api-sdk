<?php
/**
 * LabelFormatOptionTest
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
use OpenAPI\Client\Model\merchantFulfillment\LabelFormatOption;

/**
 * LabelFormatOptionTest Class Doc Comment
 *
 * @category    Class
 * @description The label format details and whether to include a packing slip.
 * @package     OpenAPI\Client
 */
class LabelFormatOptionTest extends TestCase
{

    private LabelFormatOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelFormatOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelFormatOption"
     */
    public function testLabelFormatOption()
    {
        $this->assertInstanceOf(LabelFormatOption::class, $this->model);
    }

    /**
     * Test attribute "include_packing_slip_with_label"
     */
    public function testPropertyIncludePackingSlipWithLabel()
    {
        $testValue = true;
        
        $this->model->setIncludePackingSlipWithLabel($testValue);
        $this->assertEquals($testValue, $this->model->getIncludePackingSlipWithLabel());
    }

    /**
     * Test attribute "label_format"
     */
    public function testPropertyLabelFormat()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\LabelFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelFormat($testValue);
        $this->assertEquals($testValue, $this->model->getLabelFormat());
    }
}
