<?php
/**
 * TaxItemDetailsTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\TaxItemDetails;

/**
 * TaxItemDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Total tax details for the line item.
 * @package     SpApi
 */
class TaxItemDetailsTest extends TestCase
{

    private TaxItemDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxItemDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxItemDetails"
     */
    public function testTaxItemDetails()
    {
        $this->assertInstanceOf(TaxItemDetails::class, $this->model);
    }

    /**
     * Test attribute "tax_line_item"
     */
    public function testPropertyTaxLineItem()
    {
        $testValue = [];
        
        $this->model->setTaxLineItem($testValue);
        $this->assertEquals($testValue, $this->model->getTaxLineItem());
    }
}
