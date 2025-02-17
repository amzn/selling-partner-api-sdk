<?php
/**
 * LabelCustomizationTest
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
use SpApi\Model\merchantFulfillment\v0\LabelCustomization;

/**
 * LabelCustomizationTest Class Doc Comment
 *
 * @category    Class
 * @description Custom text for shipping labels.
 * @package     SpApi
 */
class LabelCustomizationTest extends TestCase
{

    private LabelCustomization $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelCustomization();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelCustomization"
     */
    public function testLabelCustomization()
    {
        $this->assertInstanceOf(LabelCustomization::class, $this->model);
    }

    /**
     * Test attribute "custom_text_for_label"
     */
    public function testPropertyCustomTextForLabel()
    {
        $testValue = 'test';
        
        $this->model->setCustomTextForLabel($testValue);
        $this->assertEquals($testValue, $this->model->getCustomTextForLabel());
    }

    /**
     * Test attribute "standard_id_for_label"
     */
    public function testPropertyStandardIdForLabel()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\StandardIdForLabel();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStandardIdForLabel($testValue);
        $this->assertEquals($testValue, $this->model->getStandardIdForLabel());
    }
}
