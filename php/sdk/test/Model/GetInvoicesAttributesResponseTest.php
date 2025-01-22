<?php
/**
 * GetInvoicesAttributesResponseTest
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
use OpenAPI\Client\Model\invoices\GetInvoicesAttributesResponse;

/**
 * GetInvoicesAttributesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     OpenAPI\Client
 */
class GetInvoicesAttributesResponseTest extends TestCase
{

    private GetInvoicesAttributesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoicesAttributesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoicesAttributesResponse"
     */
    public function testGetInvoicesAttributesResponse()
    {
        $this->assertInstanceOf(GetInvoicesAttributesResponse::class, $this->model);
    }

    /**
     * Test attribute "invoices_attributes"
     */
    public function testPropertyInvoicesAttributes()
    {
        
        $testValue = new \OpenAPI\Client\Model\invoices\InvoicesAttributes();
        
        $this->model->setInvoicesAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getInvoicesAttributes());
    }
}
