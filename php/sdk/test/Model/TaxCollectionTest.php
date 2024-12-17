<?php
/**
 * TaxCollectionTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\TaxCollection;

/**
 * TaxCollectionTest Class Doc Comment
 *
 * @category    Class
 * @description Information about withheld taxes.
 * @package     OpenAPI\Client
 */
class TaxCollectionTest extends TestCase
{

    private TaxCollection $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxCollection();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxCollection"
     */
    public function testTaxCollection()
    {
        $this->assertInstanceOf(TaxCollection::class, $this->model);
    }

    /**
     * Test attribute "model"
     */
    public function testPropertyModel()
    {
        $enumInstance = new TaxCollection();
        $allowedValues = $enumInstance->getModelAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setModel($testValue);
        $this->assertEquals($testValue, $this->model->getModel());
    }

    /**
     * Test attribute "responsible_party"
     */
    public function testPropertyResponsibleParty()
    {
        $enumInstance = new TaxCollection();
        $allowedValues = $enumInstance->getResponsiblePartyAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setResponsibleParty($testValue);
        $this->assertEquals($testValue, $this->model->getResponsibleParty());
    }
}
