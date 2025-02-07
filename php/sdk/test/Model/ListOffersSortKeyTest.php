<?php
/**
 * ListOffersSortKeyTest
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
use OpenAPI\Client\Model\replenishment\v2022_11_07\ListOffersSortKey;

/**
 * ListOffersSortKeyTest Class Doc Comment
 *
 * @category    Class
 * @description The attribute to use to sort the results.
 * @package     OpenAPI\Client
 */
class ListOffersSortKeyTest extends TestCase
{

    private ListOffersSortKey $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersSortKey();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersSortKey"
     */
    public function testListOffersSortKey()
    {
        $this->assertInstanceOf(ListOffersSortKey::class, $this->model);
    }
}
