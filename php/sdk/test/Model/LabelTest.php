<?php
/**
 * LabelTest
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
use OpenAPI\Client\Model\merchantFulfillment\v0\Label;

/**
 * LabelTest Class Doc Comment
 *
 * @category    Class
 * @description Data for creating a shipping label and dimensions for printing the label.
 * @package     OpenAPI\Client
 */
class LabelTest extends TestCase
{

    private Label $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Label();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Label"
     */
    public function testLabel()
    {
        $this->assertInstanceOf(Label::class, $this->model);
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
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\v0\LabelDimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "file_contents"
     */
    public function testPropertyFileContents()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\v0\FileContents();
        
        $this->model->setFileContents($testValue);
        $this->assertEquals($testValue, $this->model->getFileContents());
    }

    /**
     * Test attribute "label_format"
     */
    public function testPropertyLabelFormat()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\v0\LabelFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelFormat($testValue);
        $this->assertEquals($testValue, $this->model->getLabelFormat());
    }

    /**
     * Test attribute "standard_id_for_label"
     */
    public function testPropertyStandardIdForLabel()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\v0\StandardIdForLabel();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStandardIdForLabel($testValue);
        $this->assertEquals($testValue, $this->model->getStandardIdForLabel());
    }
}
