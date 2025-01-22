<?php
/**
 * TaxWithheldComponentTest
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
use OpenAPI\Client\Model\finances\v0\TaxWithheldComponent;

/**
 * TaxWithheldComponentTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the taxes withheld.
 * @package     OpenAPI\Client
 */
class TaxWithheldComponentTest extends TestCase
{

    private TaxWithheldComponent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxWithheldComponent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxWithheldComponent"
     */
    public function testTaxWithheldComponent()
    {
        $this->assertInstanceOf(TaxWithheldComponent::class, $this->model);
    }

    /**
     * Test attribute "tax_collection_model"
     */
    public function testPropertyTaxCollectionModel()
    {
        $testValue = 'test';
        
        $this->model->setTaxCollectionModel($testValue);
        $this->assertEquals($testValue, $this->model->getTaxCollectionModel());
    }

    /**
     * Test attribute "taxes_withheld"
     */
    public function testPropertyTaxesWithheld()
    {
        $testValue = [];
        
        $this->model->setTaxesWithheld($testValue);
        $this->assertEquals($testValue, $this->model->getTaxesWithheld());
    }
}
