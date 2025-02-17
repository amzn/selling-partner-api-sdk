<?php
/**
 * CreateMarketplaceItemLabelsRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\CreateMarketplaceItemLabelsRequest;

/**
 * CreateMarketplaceItemLabelsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;createMarketplaceItemLabels&#x60; request.
 * @package     SpApi
 */
class CreateMarketplaceItemLabelsRequestTest extends TestCase
{

    private CreateMarketplaceItemLabelsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateMarketplaceItemLabelsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateMarketplaceItemLabelsRequest"
     */
    public function testCreateMarketplaceItemLabelsRequest()
    {
        $this->assertInstanceOf(CreateMarketplaceItemLabelsRequest::class, $this->model);
    }

    /**
     * Test attribute "height"
     */
    public function testPropertyHeight()
    {
        $testValue = 1;
        
        $this->model->setHeight($testValue);
        $this->assertEquals($testValue, $this->model->getHeight());
    }

    /**
     * Test attribute "label_type"
     */
    public function testPropertyLabelType()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\LabelPrintType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelType($testValue);
        $this->assertEquals($testValue, $this->model->getLabelType());
    }

    /**
     * Test attribute "locale_code"
     */
    public function testPropertyLocaleCode()
    {
        $testValue = 'test';
        
        $this->model->setLocaleCode($testValue);
        $this->assertEquals($testValue, $this->model->getLocaleCode());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "msku_quantities"
     */
    public function testPropertyMskuQuantities()
    {
        $testValue = [];
        
        $this->model->setMskuQuantities($testValue);
        $this->assertEquals($testValue, $this->model->getMskuQuantities());
    }

    /**
     * Test attribute "page_type"
     */
    public function testPropertyPageType()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\ItemLabelPageType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPageType($testValue);
        $this->assertEquals($testValue, $this->model->getPageType());
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        $testValue = 1;
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }
}
